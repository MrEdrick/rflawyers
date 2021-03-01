import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { FilterUserDto } from './dto/filter-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { EmailSenderService } from '../../email-sender/email-sender.service';
export declare class UsersService {
    private repository;
    private emailSenderService;
    constructor(repository: UserRepository, emailSenderService: EmailSenderService);
    getByFilter(filterDto: FilterUserDto): Promise<User[]>;
    getById(id: string): Promise<User>;
    create(createDto: CreateUserDto): Promise<User>;
    delete(id: string): Promise<void>;
    update(updateDto: UpdateUserDto): Promise<User>;
    updatePassword(user: User, updateUserPasswordDto: UpdateUserPasswordDto): Promise<User>;
    validatePassword(email: string, password: string): Promise<User>;
    repositoryRecoverPassword(email: string): Promise<User>;
    count(): Promise<number>;
}
