"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewArticle = void 0;
const typeorm_1 = require("typeorm");
const article_entity_1 = require("../articles/article.entity");
const lawyer_entity_1 = require("../../lawyers-registrations/lawyers/lawyer.entity");
let ViewArticle = class ViewArticle {
};
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], ViewArticle.prototype, "articleId", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], ViewArticle.prototype, "articleUserId", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], ViewArticle.prototype, "articleTitle", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], ViewArticle.prototype, "articleDescription", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], ViewArticle.prototype, "articleImage", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", Date)
], ViewArticle.prototype, "articleDate", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], ViewArticle.prototype, "articleInsertionDateTime", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", Boolean)
], ViewArticle.prototype, "articlePublished", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", Boolean)
], ViewArticle.prototype, "articleActive", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], ViewArticle.prototype, "lawyerId", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], ViewArticle.prototype, "lawyerUserId", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], ViewArticle.prototype, "lawyerFirstName", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], ViewArticle.prototype, "lawyerLastName", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", Number)
], ViewArticle.prototype, "lawyerOab", void 0);
__decorate([
    typeorm_1.ViewColumn(),
    __metadata("design:type", String)
], ViewArticle.prototype, "lawyerImage", void 0);
ViewArticle = __decorate([
    typeorm_1.ViewEntity({
        expression: (connection) => connection.createQueryBuilder()
            .select("article.id", "articleId")
            .addSelect("article.userId", "articleUserId")
            .addSelect("article.title", "articleTitle")
            .addSelect("article.description", "articleDescription")
            .addSelect("article.image", "articleImage")
            .addSelect("article.date", "articleDate")
            .addSelect("article.insertionDateTime", "articleInsertionDateTime")
            .addSelect("article.published", "articlePublished")
            .addSelect("article.active", "articleActive")
            .addSelect("lawyer.id", "lawyerId")
            .addSelect("lawyer.userId", "lawyerUserId")
            .addSelect("lawyer.firstName", "lawyerFirstName")
            .addSelect("lawyer.lastName", "lawyerLastName")
            .addSelect("lawyer.oab", "lawyerOab")
            .addSelect("lawyer.image", "lawyerImage")
            .from(article_entity_1.Article, "article")
            .innerJoin(lawyer_entity_1.Lawyer, "lawyer", "article.lawyerId = lawyer.id")
    })
], ViewArticle);
exports.ViewArticle = ViewArticle;
//# sourceMappingURL=view-article.entity.js.map