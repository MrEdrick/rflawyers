import { Injectable, NotFoundException } from '@nestjs/common';
import { ArticleRepository } from './article.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterArticleDto } from './dto/filter-article.dto';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';


@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(ArticleRepository)
        private repository: ArticleRepository
    ) {}

    getByFilter(filterDto: FilterArticleDto): Promise<Article[]> {
        return this.repository.repositoryGetByFilter(filterDto);
    }

    async getById(id: string): Promise<Article> {
        const found = await this.repository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return found;
    }

    create(createDto: CreateArticleDto, user: User): Promise<Article> {
        return this.repository.repositoryCreate(createDto, user);
    }

    async delete(id: string): Promise<void> {
        const result = await this.repository.delete(id);
        if (result.affected == 0) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return;
    }

    update(updateDto: UpdateArticleDto): Promise<Article> {
        return this.repository.repositoryUpdate(updateDto);
    }

}
