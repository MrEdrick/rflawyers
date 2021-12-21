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
exports.FilterViewArticleDto = void 0;
const class_validator_1 = require("class-validator");
class FilterViewArticleDto {
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "articleId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "articleUserId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "articleTitle", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "articleDescription", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "articleImage", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], FilterViewArticleDto.prototype, "articleDate", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "articleInsertionDateTime", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], FilterViewArticleDto.prototype, "articlePublished", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], FilterViewArticleDto.prototype, "articleActive", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "lawyerId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "lawyerUserId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "lawyerFirstName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "lawyerLastName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], FilterViewArticleDto.prototype, "lawyerOab", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "lawyerImage", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "orderBySort", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterViewArticleDto.prototype, "orderByOrder", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], FilterViewArticleDto.prototype, "paginationTake", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], FilterViewArticleDto.prototype, "paginationSkip", void 0);
exports.FilterViewArticleDto = FilterViewArticleDto;
//# sourceMappingURL=filter-view-article.dto.js.map