import { ArticleRepository } from './article.repository';
import { Article } from './article.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterArticleDto } from './dto/filter-article.dto';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesService {
    private repository;
    constructor(repository: ArticleRepository);
    getByFilter(filterDto: FilterArticleDto): Promise<Article[]>;
    getById(id: string): Promise<Article>;
    create(createDto: CreateArticleDto, user: User): Promise<Article>;
    delete(id: string): Promise<void>;
    update(updateDto: UpdateArticleDto): Promise<Article>;
}
