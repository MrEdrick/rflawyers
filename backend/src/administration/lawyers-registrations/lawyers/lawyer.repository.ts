import { Repository, EntityRepository } from "typeorm";
import { Lawyer } from "./lawyer.entity";
import { CreateLawyerDto } from "./dto/create-lawyer.dto";
import { UpdateLawyerDto } from "./dto/update-lawyer.dto";
import { FilterLawyerDto } from "./dto/filter-lawyer.dto";
import { EnumErrorCodes } from "../../../enums/enum-errorcodes";
import { ConflictException } from "@nestjs/common";
import { User } from "../../configurations/users/user.entity";
import { Exception } from "handlebars";

@EntityRepository(Lawyer)
export class LawyerRepository extends Repository<Lawyer> {
    async repositoryCreate(createDto: CreateLawyerDto, user: User): Promise<Lawyer> {
        const datas = Lawyer.fromCreateDto(createDto, user.id);

        try {
            await this.save(datas);
        } catch (error) {
            if (error.code == EnumErrorCodes.DUPLICATED_DATA) {
                throw new ConflictException('Some data is duplicated');
            } else {
                console.log(error);
                throw new Exception(error);
            }
        }

        return datas;
    }

    async repositoryUpdate(updateDto: UpdateLawyerDto): Promise<Lawyer> {
        const datas = Lawyer.fromUpdateLawyerDto(updateDto);

        try {
            await this.save({ ...datas, id: datas.id });
        } catch (error) {
            if (error.code == EnumErrorCodes.DUPLICATED_DATA) {
                throw new ConflictException('Some data is duplicated');
            }
        }

        return datas;
    }

    async repositoryGetByFilter(filterDto: FilterLawyerDto): Promise<Lawyer[]> {
        const query = this.createQueryBuilder(this.metadata.tableName);
        const { userId, firstName, lastName, description, oab, active } = filterDto;

        if (filterDto.userId) {
            query.andWhere(`"userId" = '${userId}'::uuid`);
        }

        if (filterDto.firstName) {
            query.andWhere(`"firstName" ILIKE '%${firstName}%'`);
        }

        if (filterDto.lastName) {
            query.andWhere(`"lastName" ILIKE '%${lastName}%'`);
        }

        if (filterDto.description) {
            query.andWhere(`"description" ILIKE '%${description}%'`);
        }

        if (filterDto.description) {
            query.andWhere(`"oab" = ${oab}`);
        }

        if (filterDto.active) {
            query.andWhere(`"active" = ${active}`);
        }

        return await query.getMany();
    }
}