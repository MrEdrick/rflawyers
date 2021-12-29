import { ViewArticleRepository } from './view-article.repository';
import { ViewArticle } from './view-article.entity';
import { FilterViewArticleDto } from "./dto/filter-view-article.dto";
export declare class ViewArticlesService {
    private repository;
    constructor(repository: ViewArticleRepository);
    getByFilter(filterDto: FilterViewArticleDto): Promise<[ViewArticle[], number?]>;
    getById(id: string): Promise<ViewArticle>;
}
