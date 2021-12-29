import { Repository, EntityRepository } from "typeorm";
import { Schooling } from "./schooling.entity";
import { CreateSchoolingDto } from "./dto/create-schooling.dto";
import { UpdateSchoolingDto } from "./dto/update-schooling.dto";
import { FilterSchoolingDto } from "./dto/filter-schooling.dto";
import { EnumErrorCodes } from "../../../enums/enum-errorcodes";
import { ConflictException } from "@nestjs/common";
import { User } from "../../configurations/users/user.entity";
import { Exception } from "handlebars";

@EntityRepository(Schooling)
export class SchoolingRepository extends Repository<Schooling> {
    async repositoryCreate(createDto: CreateSchoolingDto, user: User): Promise<Schooling> {
        const datas = Schooling.fromCreateDto(createDto, user.id);

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

    async repositoryUpdate(updateDto: UpdateSchoolingDto): Promise<Schooling> {
        const datas = Schooling.fromUpdateSchoolingDto(updateDto);

        try {
            await this.save({ ...datas, id: datas.id });
        } catch (error) {
            if (error.code == EnumErrorCodes.DUPLICATED_DATA) {
                throw new ConflictException('Some data is duplicated');
            }
        }

        return datas;
    }

    async repositoryGetByFilter(filterDto: FilterSchoolingDto): Promise<Schooling[]> {
        const query = this.createQueryBuilder(this.metadata.tableName);
        const { userId, lawyerId, title, description, active } = filterDto;

        if (filterDto.userId) {
            query.andWhere(`"userId" = '${userId}'::uuid`);
        }

        if (filterDto.lawyerId) {
            query.andWhere(`"lawyerId" = '${lawyerId}'::uuid`);
        }

        if (filterDto.title) {
            query.andWhere(`"title" ILIKE '%${title}%'`);
        }

        if (filterDto.description) {
            query.andWhere(`"description" ILIKE '%${description}%'`);
        }

        if (filterDto.active) {
            query.andWhere(`"active" = ${active}`);
        }
        
        return await query.getMany();
    }
}