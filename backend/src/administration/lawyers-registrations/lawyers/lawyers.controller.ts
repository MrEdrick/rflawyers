import { Controller, Query, Get, UseGuards, Post, UsePipes, ValidationPipe, Param, Body, Delete, Patch } from '@nestjs/common';
import { LawyersService } from './lawyers.service';
import { Lawyer } from './lawyer.entity';
import { User } from '../../configurations/users/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../configurations/users/user.decorator';
import { FilterLawyerDto } from './dto/filter-lawyer.dto';
import { CreateLawyerDto } from './dto/create-lawyer.dto';
import { UpdateLawyerDto } from './dto/update-lawyer.dto';

@Controller('lawyers')
export class LawyersController {
    constructor(private service: LawyersService) { }

    @Get()
    getByFilter(@Query(ValidationPipe) filterDto: FilterLawyerDto): Promise<Lawyer[]> {
        return this.service.getByFilter(filterDto);
    }

    @Get('/:id')
    getById(@Param('id') id: string): Promise<Lawyer> {
        return this.service.getById(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post()
    @UsePipes(ValidationPipe)
    create(
        @Body() createDto: CreateLawyerDto,
        @GetUser() user: User): Promise<Lawyer> {
        return this.service.create(createDto, user);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Delete('/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Patch()
    update(@Body() updateDto: UpdateLawyerDto): Promise<Lawyer> {
        return this.service.update(updateDto);
    }

}