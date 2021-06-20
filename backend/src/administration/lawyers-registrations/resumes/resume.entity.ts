import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Generated, ManyToOne, OneToMany } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { Lawyer } from "../lawyers/lawyer.entity";
import { ResumeItem } from "../resume-items/resume-item.entity";
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
    @Generated('uuid')
    lawyerId: string;
        
    @Column()
    title: string;
    
    @Column()
    description: string;

    @Column()
    active: boolean;

    @Column()
    insertionDateTime: Date;

    @ManyToOne(type => User, user => user.resumes, {eager: true})
    user: User;

    @ManyToOne(type => Lawyer, lawyer => lawyer.resumes, {eager: true})
    lawyer: Lawyer;

    @OneToMany(type => ResumeItem, resumeItem => resumeItem.resume, { eager: false })
    resumeItems: ResumeItem[];

    static fromCreateDto(props: CreateResumeDto, userId: string): Resume {
        let resume: Resume = new Resume;

        Object.assign(Resume, props);
        resume.id = uuidv4();
        resume.insertionDateTime = new Date();
        resume.userId = userId;

        return resume;
    } 

    static fromUpdateResumeDto(props: UpdateResumeDto): Resume {
        let resume: Resume = new Resume;

        Object.assign(resume, props);     

        return resume;
    }
}