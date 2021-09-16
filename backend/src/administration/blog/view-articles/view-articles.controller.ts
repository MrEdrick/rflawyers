import { Controller, Query, Get, ValidationPipe, Param } from '@nestjs/common';
import { ViewArticlesService } from './view-articles.service';
import { ViewArticle } from './view-article.entity';
import { FilterViewArticleDto } from "./dto/filter-view-article.dto";

@Controller('view-articles')
export class ViewArticlesController {
    constructor(private service: ViewArticlesService) { }

    @Get()
    getByFilter(@Query(ValidationPipe) filterDto: FilterViewArticleDto): Promise<ViewArticle[]> {
        return this.service.getByFilter(filterDto);
    }

    @Get('/:id')
    getById(@Param('id') id: string): Promise<ViewArticle> {
        return this.service.getById(id);
    }

}