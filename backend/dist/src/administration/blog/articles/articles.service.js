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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const article_repository_1 = require("./article.repository");
const typeorm_1 = require("@nestjs/typeorm");
let ArticlesService = class ArticlesService {
    constructor(repository) {
        this.repository = repository;
    }
    getByFilter(filterDto) {
        return this.repository.repositoryGetByFilter(filterDto);
    }
    async getById(id) {
        const found = await this.repository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`Record with ID "${id}" not found`);
        }
        return found;
    }
    create(createDto, user) {
        return this.repository.repositoryCreate(createDto, user);
    }
    async delete(id) {
        const result = await this.repository.delete(id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException(`Record with ID "${id}" not found`);
        }
        return;
    }
    update(updateDto) {
        return this.repository.repositoryUpdate(updateDto);
    }
};
ArticlesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(article_repository_1.ArticleRepository)),
    __metadata("design:paramtypes", [article_repository_1.ArticleRepository])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map