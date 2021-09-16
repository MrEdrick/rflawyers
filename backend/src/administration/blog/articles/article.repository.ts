import { Repository, EntityRepository } from "typeorm";
import { Article } from "./article.entity";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";
import { FilterArticleDto } from "./dto/filter-article.dto";
import { EnumErrorCodes } from "../../../enums/enum-errorcodes";
import { ConflictException } from "@nestjs/common";
import { User } from "../../configurations/users/user.entity";
import { Exception } from "handlebars";

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
    async repositoryCreate(createDto: CreateArticleDto, user: User): Promise<Article> {
        const datas = Article.fromCreateDto(createDto, user.id);

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

    async repositoryUpdate(updateDto: UpdateArticleDto): Promise<Article> {
        const datas = Article.fromUpdateArticleDto(updateDto);

        try {
            await this.save({ ...datas, id: datas.id });
        } catch (error) {
            if (error.code == EnumErrorCodes.DUPLICATED_DATA) {
                throw new ConflictException('Some data is duplicated');
            }
        }

        return datas;
    }

    async repositoryGetByFilter(filterDto: FilterArticleDto): Promise<Article[]> {
        const query = this.createQueryBuilder(this.metadata.tableName);
        const { userId, title, description, date, active, published } = filterDto;

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
        
        if (filterDto.published) {
            query.andWhere(`"published" = ${published}`);
        }

        return await query.getMany();
    }
}