import { Repository } from "typeorm";
import { Article } from "./article.entity";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";
import { FilterArticleDto } from "./dto/filter-article.dto";
import { User } from "../../configurations/users/user.entity";
export declare class ArticleRepository extends Repository<Article> {
    repositoryCreate(createDto: CreateArticleDto, user: User): Promise<Article>;
    repositoryUpdate(updateDto: UpdateArticleDto): Promise<Article>;
    repositoryGetByFilter(filterDto: FilterArticleDto): Promise<Article[]>;
}
