import { Repository } from "typeorm";
import { FilterViewArticleDto } from "./dto/filter-view-article.dto";
import { ViewArticle } from "./view-article.entity";
export declare class ViewArticleRepository extends Repository<ViewArticle> {
    repositoryGetByFilter(filterDto: FilterViewArticleDto): Promise<[ViewArticle[], number?]>;
}
