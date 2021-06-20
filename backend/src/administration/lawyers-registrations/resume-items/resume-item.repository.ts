import { Repository, EntityRepository } from "typeorm";
import { ResumeItem } from "./resume-item.entity";
import { CreateResumeItemDto } from "./dto/create-resume-item.dto";
import { UpdateResumeItemDto } from "./dto/update-resume-item.dto";
import { FilterResumeItemDto } from "./dto/filter-resume-item.dto";
import { EnumErrorCodes } from "../../../enums/enum-errorcodes";
import { ConflictException } from "@nestjs/common";
import { User } from "../../configurations/users/user.entity";
import { Exception } from "handlebars";

@EntityRepository(ResumeItem)
export class ResumeItemRepository extends Repository<ResumeItem> {
    async repositoryCreate(createDto: CreateResumeItemDto, user: User): Promise<ResumeItem> {
        const datas = ResumeItem.fromCreateDto(createDto, user.id);

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

    async repositoryUpdate(updateDto: UpdateResumeItemDto): Promise<ResumeItem> {
        const datas = ResumeItem.fromUpdateResumeItemDto(updateDto);

        try {
            await this.save({ ...datas, id: datas.id });
        } catch (error) {
            if (error.code == EnumErrorCodes.DUPLICATED_DATA) {
                throw new ConflictException('Some data is duplicated');
            }
        }

        return datas;
    }

    async repositoryGetByFilter(filterDto: FilterResumeItemDto): Promise<ResumeItem[]> {
        const query = this.createQueryBuilder(this.metadata.tableName);
        const { userId, title, description, active } = filterDto;

        if (filterDto.userId) {
            query.andWhere(`"userId" = ${userId}`);
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

        return query.getParameters() ? query.getMany() : [];
    }
}