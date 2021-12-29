import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { FilterUserDto } from "./dto/filter-user.dto";
import { UpdateUserPasswordDto } from "./dto/update-user-password.dto";
import { EmailSenderService } from "../../email-sender/email-sender.service";
export declare class UserRepository extends Repository<User> {
    repositoryCreate(createDto: CreateUserDto, emailSenderService: EmailSenderService): Promise<User>;
    repositoryUpdate(updateDto: UpdateUserDto): Promise<User>;
    repositoryUpdatePassword(user: User, updateUserPasswordDto: UpdateUserPasswordDto): Promise<User>;
    repositoryRecoverPassword(email: string, emailSenderService: EmailSenderService): Promise<User>;
    repositoryGetByFilter(filterDto: FilterUserDto): Promise<User[]>;
    validatePassword(email: string, password: string): Promise<User>;
}
