"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const common_1 = require("@nestjs/common");
const enum_errorcodes_1 = require("../../../enums/enum-errorcodes");
const filter_user_dto_1 = require("./dto/filter-user.dto");
const crypto = require("crypto");
const config = require("config");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async repositoryCreate(createDto, emailSenderService) {
        const user = await user_entity_1.User.fromCreateDto(createDto);
        try {
            await typeorm_1.getManager().transaction(async (transactionalEntityManager) => {
                await transactionalEntityManager.save(user);
                if (user === null || user === void 0 ? void 0 : user.confirmationToken) {
                    const serverConfig = config.get('server');
                    const emailSended = await emailSenderService.sendUserEmailConfirmation({
                        urlFrontEnd: serverConfig.origin,
                        confirmationToken: user.confirmationToken,
                        email: user.email,
                        name: user.name
                    });
                    if (!emailSended) {
                        throw new Error('E-mail for confirmation not sended');
                    }
                }
                else {
                    throw new Error('Some problem with confirmation token generation');
                }
            });
        }
        catch (error) {
            if (error.code == enum_errorcodes_1.EnumErrorCodes.DUPLICATED_DATA) {
                throw new common_1.ConflictException('Some data is duplicated');
            }
            else {
                throw error;
            }
        }
        return user;
    }
    async repositoryUpdate(updateDto) {
        const datas = user_entity_1.User.fromUpdateUserDto(updateDto);
        datas.password = (await this.findOne(datas.id)).password;
        try {
            await this.save(Object.assign(Object.assign({}, datas), { id: datas.id }));
        }
        catch (error) {
            if (error.code == enum_errorcodes_1.EnumErrorCodes.DUPLICATED_DATA) {
                throw new common_1.ConflictException('Some data is duplicated');
            }
            else {
                throw error;
            }
        }
        return datas;
    }
    async repositoryUpdatePassword(user, updateUserPasswordDto) {
        if (!user) {
            user = await this.findOne(updateUserPasswordDto.id);
        }
        const datas = await user_entity_1.User.fromUpdateUserPasswordDto(user, updateUserPasswordDto.password);
        try {
            await this.save(Object.assign(Object.assign({}, datas), { id: datas.id }));
        }
        catch (error) {
            if (error.code == enum_errorcodes_1.EnumErrorCodes.DUPLICATED_DATA) {
                throw new common_1.ConflictException('Some data is duplicated');
            }
        }
        return datas;
    }
    async repositoryRecoverPassword(email, emailSenderService) {
        const filterUserDto = new filter_user_dto_1.FilterUserDto();
        filterUserDto.email = email;
        const user = (await this.repositoryGetByFilter(filterUserDto))[0];
        if (!user)
            throw new common_1.NotFoundException('User not found.');
        try {
            await typeorm_1.getManager().transaction(async (transactionalEntityManager) => {
                user.recoverToken = crypto.randomBytes(32).toString('hex');
                await transactionalEntityManager.save(user);
                if (user === null || user === void 0 ? void 0 : user.recoverToken) {
                    const serverConfig = config.get('server');
                    const emailSended = await emailSenderService.sendUserRecoverPassword({
                        urlFrontEnd: serverConfig.origin,
                        recoverToken: user.recoverToken,
                        email: user.email,
                        name: user.name
                    });
                    if (!emailSended) {
                        throw new Error('E-mail for confirmation not sended');
                    }
                }
                else {
                    throw new Error('Some problem with recover token generation');
                }
            });
        }
        catch (error) {
            if (error.code == enum_errorcodes_1.EnumErrorCodes.DUPLICATED_DATA) {
                throw new common_1.ConflictException('Some data is duplicated');
            }
            else {
                throw error;
            }
        }
        return user;
    }
    async repositoryGetByFilter(filterDto) {
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
    async validatePassword(email, password) {
        var user = await this.findOne({ email });
        if (!user)
            null;
        const valid = (await user.validatePassword(password));
        if (valid) {
            return user;
        }
        else {
            return null;
        }
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map