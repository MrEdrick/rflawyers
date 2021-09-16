"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewArticleRepository = void 0;
const typeorm_1 = require("typeorm");
const view_article_entity_1 = require("./view-article.entity");
let ViewArticleRepository = class ViewArticleRepository extends typeorm_1.Repository {
    async repositoryGetByFilter(filterDto) {
        const query = this.createQueryBuilder(this.metadata.tableName);
        const { articleId, articleUserId, articleTitle, articleDescription, articleDate, articleInsertionDateTime, articlePublished, articleActive, lawyerId, lawyerUserId, lawyerFirstName, lawyerLastName, lawyerOab } = filterDto;
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
        return query.getMany();
    }
};
ViewArticleRepository = __decorate([
    typeorm_1.EntityRepository(view_article_entity_1.ViewArticle)
], ViewArticleRepository);
exports.ViewArticleRepository = ViewArticleRepository;
//# sourceMappingURL=view-article.repository.js.map