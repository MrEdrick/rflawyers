import { ViewArticlesService } from './view-articles.service';
import { ViewArticle } from './view-article.entity';
import { FilterViewArticleDto } from "./dto/filter-view-article.dto";
export declare class ViewArticlesController {
    private service;
    constructor(service: ViewArticlesService);
    getByFilter(filterDto: FilterViewArticleDto): Promise<ViewArticle[]>;
    getById(id: string): Promise<ViewArticle>;
}
