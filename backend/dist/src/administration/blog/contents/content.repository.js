"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRepository = void 0;
const typeorm_1 = require("typeorm");
const content_entity_1 = require("./content.entity");
const enum_errorcodes_1 = require("../../../enums/enum-errorcodes");
const common_1 = require("@nestjs/common");
const handlebars_1 = require("handlebars");
let ContentRepository = class ContentRepository extends typeorm_1.Repository {
    async repositoryCreate(createDto, user) {
        const datas = content_entity_1.Content.fromCreateDto(createDto, user.id);
        try {
            datas.order = (await this.repositoryGetCount(createDto.articleId)) + 1;
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
        const datas = content_entity_1.Content.fromUpdateArticleDto(updateDto);
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
    async repositoryGetCount(articleId) {
        const query = this.createQueryBuilder(this.metadata.tableName);
        query.andWhere(`"articleId" = '${articleId}'::uuid`);
        return await query.getCount();
    }
};
ContentRepository = __decorate([
    typeorm_1.EntityRepository(content_entity_1.Content)
], ContentRepository);
exports.ContentRepository = ContentRepository;
//# sourceMappingURL=content.repository.js.map