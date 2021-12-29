"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModule = void 0;
const common_1 = require("@nestjs/common");
const articles_module_1 = require("./articles/articles.module");
const contents_module_1 = require("./contents/contents.module");
const view_articles_module_1 = require("./view-articles/view-articles.module");
let BlogModule = class BlogModule {
};
BlogModule = __decorate([
    common_1.Module({
        imports: [
            contents_module_1.ContentsModule,
            articles_module_1.ArticlesModule,
            view_articles_module_1.ViewArticlesModule
        ],
        exports: [
            contents_module_1.ContentsModule,
            articles_module_1.ArticlesModule,
            view_articles_module_1.ViewArticlesModule
        ]
    })
], BlogModule);
exports.BlogModule = BlogModule;
//# sourceMappingURL=blog.module.js.map