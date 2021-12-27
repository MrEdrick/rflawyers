import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Lawyer } from "src/administration/lawyers-registrations/lawyers/lawyer.entity";
import { Resume } from "src/administration/lawyers-registrations/resumes/resume.entity";
import { ResumeItem } from "src/administration/lawyers-registrations/resume-items/resume-item.entity";
import { Schooling } from "src/administration/lawyers-registrations/schooling/schooling.entity";

import * as bcrypt from 'bcryptjs';
import * as crypto from "crypto";
import { Article } from "src/administration/blog/articles/article.entity";
import { Content } from "src/administration/blog/contents/content.entity";

const { v4: uuidv4 } = require('uuid');

@Entity()
@Unique(['username', 'email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column({ nullable: true })
    confirmationToken: string;

    @Column({ nullable: true })
    recoverToken: string;

    @Column({ nullable: true })
    image: string;

    @Column()
    active: boolean;

    @Column({ nullable: true })
    isDefault: boolean;

    @Column()
    isAdministrator: boolean;

    @Column()
    insertionDateTime: Date;

    @OneToMany(type => Lawyer, lawyer => lawyer.user, { eager: false })
    lawyers: Lawyer[];

    @OneToMany(type => Resume, resume => resume.user, { eager: false })
    resumes: Resume[];

    @OneToMany(type => ResumeItem, resumeItem => resumeItem.user, { eager: false })
    resumeItems: ResumeItem[];

    @OneToMany(type => Schooling, schooling => schooling.user, { eager: false })
    schooling: Schooling[];

    @OneToMany(type => Article, article => article.user, { eager: false })
    articles: Article[];

    @OneToMany(type => Content, content => content.user, { eager: false })
    content: Content[];

    async validatePassword(password: string): Promise<boolean> {
        return this.password === (await bcrypt.hash(password, this.salt));
    }

    static async fromCreateDto(props: CreateUserDto): Promise<User> {
        let user: User = new User;

        Object.assign(user, props);
        user.id = uuidv4();
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(user.password, user.salt);
        user.confirmationToken = crypto.randomBytes(32).toString('hex');
        user.insertionDateTime = new Date();

        return user;
    }

    static fromUpdateUserDto(props: UpdateUserDto): User {
        let user: User = new User;

        Object.assign(user, props);

        return user;
    }

    static async fromUpdateUserPasswordDto(user: User, password: string): Promise<User> {
        user.recoverToken = null;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);

        return user;
    }

    static async hashPassword(password: string, salt: string): Promise<string> {
        return await bcrypt.hash(password, salt);
    }
}