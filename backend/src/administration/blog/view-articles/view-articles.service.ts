import { Injectable, NotFoundException } from '@nestjs/common';
import { ViewArticleRepository } from './view-article.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ViewArticle } from './view-article.entity';
import { FilterViewArticleDto } from "./dto/filter-view-article.dto";


@Injectable()
export class ViewArticlesService {
    constructor(
        @InjectRepository(ViewArticleRepository)
        private repository: ViewArticleRepository
    ) {}

    getByFilter(filterDto: FilterViewArticleDto): Promise<[ViewArticle[], number?]> {
        return this.repository.repositoryGetByFilter(filterDto);
    }

    async getById(id: string): Promise<ViewArticle> {
        const found = await this.repository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return found;
    }
}
