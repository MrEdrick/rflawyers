import { BaseEntity } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Lawyer } from "src/administration/lawyers-registrations/lawyers/lawyer.entity";
import { Resume } from "src/administration/lawyers-registrations/resumes/resume.entity";
import { ResumeItem } from "src/administration/lawyers-registrations/resume-items/resume-item.entity";
export declare class User extends BaseEntity {
    id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    salt: string;
    confirmationToken: string;
    recoverToken: string;
    image: string;
    active: boolean;
    isDefault: boolean;
    isAdministrator: boolean;
    insertionDateTime: Date;
    lawyers: Lawyer[];
    resumes: Resume[];
    resumeItems: ResumeItem[];
    validatePassword(password: string): Promise<boolean>;
    static fromCreateDto(props: CreateUserDto): Promise<User>;
    static fromUpdateUserDto(props: UpdateUserDto): User;
    static fromUpdateUserPasswordDto(user: User, password: string): Promise<User>;
    static hashPassword(password: string, salt: string): Promise<string>;
}
