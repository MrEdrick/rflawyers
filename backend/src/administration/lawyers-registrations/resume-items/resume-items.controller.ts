import { Controller, Query, Get, UseGuards, Post, UsePipes, ValidationPipe, Param, Body, Delete, Patch } from '@nestjs/common';
import { ResumeItemsService } from './resume-items.service';
import { ResumeItem } from './resume-item.entity';
import { User } from '../../configurations/users/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../configurations/users/user.decorator';
import { FilterResumeItemDto } from './dto/filter-resume-item.dto';
import { CreateResumeItemDto } from './dto/create-resume-item.dto';
import { UpdateResumeItemDto } from './dto/update-resume-item.dto';

@Controller('resume-items')
export class ResumeItemsController {
    constructor(private service: ResumeItemsService) { }

    @Get()
    getByFilter(@Query(ValidationPipe) filterDto: FilterResumeItemDto): Promise<ResumeItem[]> {
        return this.service.getByFilter(filterDto);
    }

    @Get('/:id')
    getById(@Param('id') id: string): Promise<ResumeItem> {
        return this.service.getById(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post()
    @UsePipes(ValidationPipe)
    create(
        @Body() createDto: CreateResumeItemDto,
        @GetUser() user: User): Promise<ResumeItem> {
        return this.service.create(createDto, user);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Delete('/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Patch()
    update(@Body() updateDto: UpdateResumeItemDto): Promise<ResumeItem> {
        return this.service.update(updateDto);
    }

}