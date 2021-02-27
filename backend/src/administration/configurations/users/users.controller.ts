import { Controller, Get, Post, Delete, Patch, UsePipes, Query, Param, Body, ValidationPipe, UseGuards, UseFilters } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { FilterUserDto } from './dto/filter-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('adm/users')
export class UsersController {
    constructor(private service: UsersService) { }

    @Get()
    getByFilter(@Query(ValidationPipe) filterDto: FilterUserDto): Promise<User[]> {
        return this.service.getByFilter(filterDto);
    }

    @Get('/:id')
    getById(@Param('id') id: string): Promise<User> {
        return this.service.getById(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post()
    @UsePipes(ValidationPipe)
    create(
        @Body() createDto: CreateUserDto): Promise<User> {
        return this.service.create(createDto);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Delete('/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Patch()
    update(@Body() updateDto: UpdateUserDto): Promise<User> {
        return this.service.update(updateDto);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Patch('/update_password')
    updatePassword(@Body() updateUserPasswordDto: UpdateUserPasswordDto): Promise<User> {
        return this.service.updatePassword(null, updateUserPasswordDto);
    }
}
