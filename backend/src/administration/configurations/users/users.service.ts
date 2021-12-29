import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { FilterUserDto } from './dto/filter-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { EmailSenderService } from '../../email-sender/email-sender.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private repository: UserRepository,
        private emailSenderService: EmailSenderService
    ) { }

    getByFilter(filterDto: FilterUserDto): Promise<User[]> {
        return this.repository.repositoryGetByFilter(filterDto);
    }

    async getById(id: string): Promise<User> {
        const found = await this.repository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return found;
    }

    create(createDto: CreateUserDto): Promise<User> {
        return this.repository.repositoryCreate(createDto, this.emailSenderService);
    }

    async delete(id: string): Promise<void> {
        const result = await this.repository.delete(id);
        if (result.affected == 0) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return;
    }

    update(updateDto: UpdateUserDto): Promise<User> {
        return this.repository.repositoryUpdate(updateDto);
    }

    updatePassword(user: User, updateUserPasswordDto: UpdateUserPasswordDto): Promise<User> {
        return this.repository.repositoryUpdatePassword(user, updateUserPasswordDto);
    }

    validatePassword(email: string, password: string): Promise<User> {
        return this.repository.validatePassword(email, password);
    }

    repositoryRecoverPassword(email: string): Promise<User>{
        return this.repository.repositoryRecoverPassword(email, this.emailSenderService);
    }

    count(): Promise<number> {
        return this.repository.count();
    }
}
