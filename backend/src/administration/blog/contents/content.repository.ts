import { Repository, EntityRepository } from "typeorm";
import { Content } from "./content.entity";
import { CreateContentDto } from "./dto/create-content.dto";
import { UpdateContentDto } from "./dto/update-content.dto";
import { FilterContentDto } from "./dto/filter-content.dto";
import { EnumErrorCodes } from "../../../enums/enum-errorcodes";
import { ConflictException } from "@nestjs/common";
import { User } from "../../configurations/users/user.entity";
import { Exception } from "handlebars";

@EntityRepository(Content)
export class ContentRepository extends Repository<Content> {
    async repositoryCreate(createDto: CreateContentDto, user: User): Promise<Content> {
        const datas = Content.fromCreateDto(createDto, user.id);
        
        try {
            datas.order = (await this.repositoryGetCount(createDto.articleId)) + 1;
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

    async repositoryUpdate(updateDto: UpdateContentDto): Promise<Content> {
        const datas = Content.fromUpdateArticleDto(updateDto);

        try {
            await this.save({ ...datas, id: datas.id });
        } catch (error) {
            if (error.code == EnumErrorCodes.DUPLICATED_DATA) {
                throw new ConflictException('Some data is duplicated');
            }
        }

        return datas;
    }

    async repositoryGetByFilter(filterDto: FilterContentDto): Promise<Content[]> {
        const query = this.createQueryBuilder(this.metadata.tableName);
        const { userId, title, description, date, active } = filterDto;

        if (filterDto.userId) {
            query.andWhere(`"userId" = '${userId}'::uuid`);
        }

        if (filterDto.title) {
            query.andWhere(`"title" ILIKE '%${title}%'`);
        }

        if (filterDto.description) {
            query.andWhere(`"description" ILIKE '%${description}%'`);
        }

        if (filterDto.date) {
            query.andWhere(`"oab" = ${date}`);
        }

        if (filterDto.active) {
            query.andWhere(`"active" = ${active}`);
        }

        return await query.getMany();
    }

    
    async repositoryGetCount(articleId: string): Promise<number> {
        const query = this.createQueryBuilder(this.metadata.tableName);

        query.andWhere(`"articleId" = '${articleId}'::uuid`);

        return await query.getCount();
    }
}