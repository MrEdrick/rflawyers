import { Controller, Query, Get, UseGuards, Post, UsePipes, ValidationPipe, Param, Body, Delete, Patch } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './article.entity';
import { User } from '../../configurations/users/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../configurations/users/user.decorator';
import { FilterArticleDto } from './dto/filter-article.dto';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private service: ArticlesService) { }

    @Get()
    getByFilter(@Query(ValidationPipe) filterDto: FilterArticleDto): Promise<Article[]> {
        return this.service.getByFilter(filterDto);
    }

    @Get('/:id')
    getById(@Param('id') id: string): Promise<Article> {
        return this.service.getById(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post()
    @UsePipes(ValidationPipe)
    create(
        @Body() createDto: CreateArticleDto,
        @GetUser() user: User): Promise<Article> {
        return this.service.create(createDto, user);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Delete('/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Patch()
    update(@Body() updateDto: UpdateArticleDto): Promise<Article> {
        return this.service.update(updateDto);
    }

}