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
var Content_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../configurations/users/user.entity");
const article_entity_1 = require("../articles/article.entity");
const { v4: uuidv4 } = require('uuid');
let Content = Content_1 = class Content extends typeorm_1.BaseEntity {
    static fromCreateDto(props, userId) {
        let content = new Content_1;
        Object.assign(content, props);
        content.id = uuidv4();
        content.insertionDateTime = new Date();
        content.userId = userId;
        return content;
    }
    static fromUpdateArticleDto(props) {
        let content = new Content_1;
        Object.assign(content, props);
        return content;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Content.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], Content.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], Content.prototype, "articleId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Content.prototype, "subTitle", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Content.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Content.prototype, "image", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Content.prototype, "order", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Content.prototype, "active", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Content.prototype, "insertionDateTime", void 0);
__decorate([
    typeorm_1.ManyToOne(type => article_entity_1.Article, article => article.contents, { eager: true }),
    __metadata("design:type", article_entity_1.Article)
], Content.prototype, "article", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.lawyers, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], Content.prototype, "user", void 0);
Content = Content_1 = __decorate([
    typeorm_1.Entity()
], Content);
exports.Content = Content;
//# sourceMappingURL=content.entity.js.map