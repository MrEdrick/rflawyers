import { Controller, Query, Get, UseGuards, Post, UsePipes, ValidationPipe, Param, Body, Delete, Patch } from '@nestjs/common';
import { SchoolingService } from './schooling.service';
import { Schooling } from './schooling.entity';
import { User } from '../../configurations/users/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../configurations/users/user.decorator';
import { FilterSchoolingDto } from './dto/filter-schooling.dto';
import { CreateSchoolingDto } from './dto/create-schooling.dto';
import { UpdateSchoolingDto } from './dto/update-schooling.dto';

@Controller('schooling')
export class SchoolingController {
    constructor(private service: SchoolingService) { }

    @Get()
    getByFilter(@Query(ValidationPipe) filterDto: FilterSchoolingDto): Promise<Schooling[]> {
        return this.service.getByFilter(filterDto);
    }

    @Get('/:id')
    getById(@Param('id') id: string): Promise<Schooling> {
        return this.service.getById(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post()
    @UsePipes(ValidationPipe)
    create(
        @Body() createDto: CreateSchoolingDto,
        @GetUser() user: User): Promise<Schooling> {
        return this.service.create(createDto, user);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Delete('/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Patch()
    update(@Body() updateDto: UpdateSchoolingDto): Promise<Schooling> {
        return this.service.update(updateDto);
    }

}