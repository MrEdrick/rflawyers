import { User } from './user.entity';
import { UsersService } from './users.service';
import { FilterUserDto } from './dto/filter-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    getByFilter(filterDto: FilterUserDto): Promise<User[]>;
    getById(id: string): Promise<User>;
    create(createDto: CreateUserDto): Promise<User>;
    delete(id: string): Promise<void>;
    update(updateDto: UpdateUserDto): Promise<User>;
    updatePassword(updateUserPasswordDto: UpdateUserPasswordDto): Promise<User>;
}
