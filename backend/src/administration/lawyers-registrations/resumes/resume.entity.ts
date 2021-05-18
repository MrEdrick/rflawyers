import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Generated, ManyToOne } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { CreateResumeDto } from "./dto/create-resume.dto";
import { UpdateResumeDto } from "./dto/update-resume.dto";

const { v4: uuidv4 } = require('uuid');

@Entity()
export class Resume extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Generated('uuid')
    userId: string;
    
    @Column()
    name: string;

    @Column()
    active: boolean;

    @Column()
    insertionDateTime: Date;

    @ManyToOne(type => User, user => user.Resumes, {eager: true})
    user: User;

    static fromCreateDto(props: CreateResumeDto, userId: string): Resume {
        let Resume: Resume = new Resume;

        Object.assign(Resume, props);
        Resume.id = uuidv4();
        Resume.insertionDateTime = new Date();
        Resume.userId = userId;

        return Resume;
    } 

    static fromUpdateResumeDto(props: UpdateResumeDto): Resume {
        let Resume: Resume = new Resume;

        Object.assign(Resume, props);     

        return Resume;
    }
}