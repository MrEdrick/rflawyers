"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewArticlesModule = void 0;
const common_1 = require("@nestjs/common");
const view_articles_controller_1 = require("./view-articles.controller");
const view_articles_service_1 = require("./view-articles.service");
const view_article_repository_1 = require("./view-article.repository");
const user_auth_module_1 = require("../../user-auth/user-auth.module");
const typeorm_1 = require("@nestjs/typeorm");
let ViewArticlesModule = class ViewArticlesModule {
};
ViewArticlesModule = __decorate([
    common_1.Module({
        imports: [
            user_auth_module_1.UserAuthModule,
            typeorm_1.TypeOrmModule.forFeature([view_article_repository_1.ViewArticleRepository])
        ],
        controllers: [view_articles_controller_1.ViewArticlesController],
        providers: [view_articles_service_1.ViewArticlesService]
    })
], ViewArticlesModule);
exports.ViewArticlesModule = ViewArticlesModule;
//# sourceMappingURL=view-articles.module.js.map