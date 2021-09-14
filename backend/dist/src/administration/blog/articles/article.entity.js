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
var Article_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const lawyer_entity_1 = require("../../lawyers-registrations/lawyers/lawyer.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../configurations/users/user.entity");
const content_entity_1 = require("../contents/content.entity");
const { v4: uuidv4 } = require('uuid');
let Article = Article_1 = class Article extends typeorm_1.BaseEntity {
    static fromCreateDto(props, userId) {
        let article = new Article_1;
        Object.assign(article, props);
        article.id = uuidv4();
        article.insertionDateTime = new Date();
        article.userId = userId;
        return article;
    }
    static fromUpdateArticleDto(props) {
        let article = new Article_1;
        Object.assign(article, props);
        return article;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Article.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], Article.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], Article.prototype, "lawyerId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Article.prototype, "date", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Article.prototype, "image", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Article.prototype, "active", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Article.prototype, "insertionDateTime", void 0);
__decorate([
    typeorm_1.OneToMany(type => content_entity_1.Content, content => content.article, { eager: false }),
    __metadata("design:type", Array)
], Article.prototype, "contents", void 0);
__decorate([
    typeorm_1.ManyToOne(type => lawyer_entity_1.Lawyer, lawyer => lawyer.articles, { eager: true }),
    __metadata("design:type", lawyer_entity_1.Lawyer)
], Article.prototype, "lawyer", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.lawyers, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], Article.prototype, "user", void 0);
Article = Article_1 = __decorate([
    typeorm_1.Entity()
], Article);
exports.Article = Article;
//# sourceMappingURL=article.entity.js.map