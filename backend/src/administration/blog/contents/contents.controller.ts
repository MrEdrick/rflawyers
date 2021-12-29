import { Controller, Query, Get, UseGuards, Post, UsePipes, ValidationPipe, Param, Body, Delete, Patch } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { Content } from './content.entity';
import { User } from '../../configurations/users/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../configurations/users/user.decorator';
import { FilterContentDto } from './dto/filter-content.dto';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Controller('contents')
export class ContentsController {
    constructor(private service: ContentsService) { }

    @Get()
    getByFilter(@Query(ValidationPipe) filterDto: FilterContentDto): Promise<Content[]> {
        return this.service.getByFilter(filterDto);
    }

    @Get('/:id')
    getById(@Param('id') id: string): Promise<Content> {
        return this.service.getById(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post()
    @UsePipes(ValidationPipe)
    create(
        @Body() createDto: CreateContentDto,
        @GetUser() user: User): Promise<Content> {
        return this.service.create(createDto, user);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Delete('/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Patch()
    update(@Body() updateDto: UpdateContentDto): Promise<Content> {
        return this.service.update(updateDto);
    }

}