import { Repository, EntityRepository, getManager } from "typeorm";
import { User } from "./user.entity";
import { ConflictException, NotFoundException } from "@nestjs/common";
import { EnumErrorCodes } from "../../../enums/enum-errorcodes";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { FilterUserDto } from "./dto/filter-user.dto";
import { UpdateUserPasswordDto } from "./dto/update-user-password.dto";
import { EmailSenderService } from "../../email-sender/email-sender.service";

import * as crypto from "crypto";
import * as config from 'config';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async repositoryCreate(createDto: CreateUserDto, emailSenderService: EmailSenderService): Promise<User> {
        const user = await User.fromCreateDto(createDto);

        try {
            await getManager().transaction(async transactionalEntityManager => {
                await transactionalEntityManager.save(user);

                if (user?.confirmationToken) {
                    const serverConfig = config.get('server');

                    const emailSended = await emailSenderService.sendUserEmailConfirmation(
                        {
                            urlFrontEnd: serverConfig.domain,
                            confirmationToken: user.confirmationToken,
                            email: user.email,
                            name: user.name
                        }
                    )

                    if (!emailSended) {
                        throw new Error('E-mail for confirmation not sended');
                    }
                } else {
                    throw new Error('Some problem with confirmation token generation');
                }

            });
        } catch (error) {
            if (error.code == EnumErrorCodes.DUPLICATED_DATA) {
                throw new ConflictException('Some data is duplicated');
            } else {
                throw error;
            }
        }

        return user;
    }

    async repositoryUpdate(updateDto: UpdateUserDto): Promise<User> {
        const datas = User.fromUpdateUserDto(updateDto);

        datas.password = (await this.findOne(datas.id)).password;

        try {
            await this.save({ ...datas, id: datas.id });
        } catch (error) {
            if (error.code == EnumErrorCodes.DUPLICATED_DATA) {
                throw new ConflictException('Some data is duplicated');
            } else {
                throw error;
            }
        }

        return datas;
    }

    async repositoryUpdatePassword(user: User, updateUserPasswordDto: UpdateUserPasswordDto): Promise<User> {
        if (!user) {
            user = await this.findOne(updateUserPasswordDto.id);
        }
        
        const datas = await User.fromUpdateUserPasswordDto(user, updateUserPasswordDto.password);

        try {
            await this.save({ ...datas, id: datas.id });
        } catch (error) {
            if (error.code == EnumErrorCodes.DUPLICATED_DATA) {
                throw new ConflictException('Some data is duplicated');
            }
        }

        return datas;
    }

    async repositoryRecoverPassword(email: string, emailSenderService: EmailSenderService): Promise<User> {
        const filterUserDto = new FilterUserDto();
        filterUserDto.email = email;

        const user = (await this.repositoryGetByFilter(filterUserDto))[0];

        if (!user)
            throw new NotFoundException('User not found.');

        try {
            await getManager().transaction(async transactionalEntityManager => {
                user.recoverToken = crypto.randomBytes(32).toString('hex');

                await transactionalEntityManager.save(user);

                if (user?.recoverToken) {
                    const serverConfig = config.get('server');

                    const emailSended = await emailSenderService.sendUserRecoverPassword(
                        {
                            urlFrontEnd: serverConfig.domain,
                            recoverToken: user.recoverToken,
                            email: user.email,
                            name: user.name
                        }
                    )

                    if (!emailSended) {
                        throw new Error('E-mail for confirmation not sended');
                    }
                } else {
                    throw new Error('Some problem with recover token generation');
                }

            });
        } catch (error) {
            if (error.code == EnumErrorCodes.DUPLICATED_DATA) {
                throw new ConflictException('Some data is duplicated');
            } else {
                throw error;
            }
        }

        return user;
    }

    async repositoryGetByFilter(filterDto: FilterUserDto): Promise<User[]> {
        const query = this.createQueryBuilder(this.metadata.tableName);
        const { email, isDefault, confirmationToken, recoverToken } = filterDto;

        if (filterDto.email) {
            query.andWhere(`"email" = '${email}'`);
        }

        if (filterDto.isDefault) {
            query.andWhere(`"isDefault" = '${isDefault}'`);
        }

        if (filterDto.confirmationToken) {
            query.andWhere(`"confirmationToken" = '${confirmationToken}'`);
        }

        if (filterDto.recoverToken) {
            query.andWhere(`"recoverToken" = '${recoverToken}'`);
        }

        return await query.getMany();
    }

    async validatePassword(email: string, password: string): Promise<User> {
        var user = await this.findOne({ email });

        if (!user) {
            return null;
        }

        const valid = (await user.validatePassword(password));
        if (valid) {
            return user;
        } else {
            return null;
        }
    }

}