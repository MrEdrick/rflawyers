"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleRepository = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article.entity");
const enum_errorcodes_1 = require("../../../enums/enum-errorcodes");
const common_1 = require("@nestjs/common");
const handlebars_1 = require("handlebars");
let ArticleRepository = class ArticleRepository extends typeorm_1.Repository {
    async repositoryCreate(createDto, user) {
        const datas = article_entity_1.Article.fromCreateDto(createDto, user.id);
        try {
            await this.save(datas);
        }
        catch (error) {
            if (error.code == enum_errorcodes_1.EnumErrorCodes.DUPLICATED_DATA) {
                throw new common_1.ConflictException('Some data is duplicated');
            }
            else {
                console.log(error);
                throw new handlebars_1.Exception(error);
            }
        }
        return datas;
    }
    async repositoryUpdate(updateDto) {
        const datas = article_entity_1.Article.fromUpdateArticleDto(updateDto);
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
    async repositoryGetByFilter(filterDto) {
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
};
ArticleRepository = __decorate([
    typeorm_1.EntityRepository(article_entity_1.Article)
], ArticleRepository);
exports.ArticleRepository = ArticleRepository;
//# sourceMappingURL=article.repository.js.map