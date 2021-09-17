import { Repository, EntityRepository } from "typeorm";
import { FilterViewArticleDto } from "./dto/filter-view-article.dto";
import { ViewArticle } from "./view-article.entity";

@EntityRepository(ViewArticle)
export class ViewArticleRepository extends Repository<ViewArticle> {
    async repositoryGetByFilter(filterDto: FilterViewArticleDto): Promise<[ViewArticle[], number?]> {
        const query = this.createQueryBuilder(this.metadata.tableName);
        const { 
            articleId, articleUserId, articleTitle, articleDescription,
            articleDate, articleInsertionDateTime, articlePublished, articleActive, 
            lawyerId, lawyerUserId, lawyerFirstName, lawyerLastName, lawyerOab,
            orderBySort, orderByOrder, paginationTake, paginationSkip } = filterDto;
            
        if (filterDto.articleId) {
            query.andWhere(`"articleId" = '${articleId}'::uuid`);
        }

        if (filterDto.articleUserId) {
            query.andWhere(`"articleUserId" = '${articleUserId}'::uuid`);
        }

        if (filterDto.lawyerId) {
            query.andWhere(`"lawyerId" = '${lawyerId}'::uuid`);
        }

        if (filterDto.lawyerUserId) {
            query.andWhere(`"lawyerUserId" = '${lawyerUserId}'::uuid`);
        }

        if (filterDto.articlePublished) {
            query.andWhere(`"articlePublished" = ${articlePublished}`);
        }

        if (filterDto.articleActive) {
            query.andWhere(`"articleActive" = ${articleActive}`);
        }

        if (filterDto.articleTitle) {
            query.andWhere(`"articleTitle" = %${articleTitle}%`);
        }
        
        if (filterDto.articleDescription) {
            query.andWhere(`"articleDescription" ilike '%${articleDescription}%'`);
        }

        if (filterDto.articleDate) {
            query.andWhere(`"articleDate" = ${articleDate}`);
        }

        if (filterDto.articleInsertionDateTime) {
            query.andWhere(`"articleInsertionDateTime" = ${articleInsertionDateTime}`);
        }
        
        if (filterDto.lawyerFirstName) {
            query.andWhere(`"lawyerFirstName" ilike '%${lawyerFirstName}%'`);
        }
        
        if (filterDto.lawyerLastName) {
            query.andWhere(`"lawyerLastName" ilike '%${lawyerLastName}%'`);
        }

        if (filterDto.lawyerOab) {
            query.andWhere(`"lawyerOab" = ${lawyerOab}`);
        }

        if ((filterDto.orderBySort) && (filterDto.orderByOrder)) {
            query.orderBy('"' + orderBySort + '"', orderByOrder);
        }

        if (filterDto.paginationTake) {
            query.take(paginationTake);
        }

        if (filterDto.paginationSkip) {
            query.skip(paginationSkip);
        }
        
        return query.getManyAndCount();
    }
}