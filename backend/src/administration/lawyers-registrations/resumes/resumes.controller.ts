import { Controller, Query, Get, UseGuards, Post, UsePipes, ValidationPipe, Param, Body, Delete, Patch } from '@nestjs/common';
import { ResumesService } from './resumes.service';
import { Resume } from './resume.entity';
import { User } from '../../configurations/users/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../configurations/users/user.decorator';
import { FilterResumeDto } from './dto/filter-resume.dto';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';

@Controller('resumes')
export class ResumesController {
    constructor(private service: ResumesService) { }

    @Get()
    getByFilter(@Query(ValidationPipe) filterDto: FilterResumeDto): Promise<Resume[]> {
        return this.service.getByFilter(filterDto);
    }

    @Get('/:id')
    getById(@Param('id') id: string): Promise<Resume> {
        return this.service.getById(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post()
    @UsePipes(ValidationPipe)
    create(
        @Body() createDto: CreateResumeDto,
        @GetUser() user: User): Promise<Resume> {
        return this.service.create(createDto, user);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Delete('/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Patch()
    update(@Body() updateDto: UpdateResumeDto): Promise<Resume> {
        return this.service.update(updateDto);
    }

}