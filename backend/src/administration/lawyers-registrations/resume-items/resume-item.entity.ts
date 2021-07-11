import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Generated, ManyToOne } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { Resume } from "../resumes/resume.entity";
import { CreateResumeItemDto } from "./dto/create-resume-item.dto";
import { UpdateResumeItemDto } from "./dto/update-resume-item.dto";

const { v4: uuidv4 } = require('uuid');

@Entity()
export class ResumeItem extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Generated('uuid')
    userId: string;

    @Column()
    @Generated('uuid')
    resumeId: string;
        
    @Column()
    title: string;
    
    @Column()
    description: string;

    @Column()
    active: boolean;

    @Column()
    insertionDateTime: Date;

    @ManyToOne(type => User, user => user.resumeItems, {eager: true})
    user: User;

    @ManyToOne(type => Resume, resume => resume.resumeItems, {eager: true})
    resume: Resume;

    static fromCreateDto(props: CreateResumeItemDto, userId: string): ResumeItem {
        let resumeItem: ResumeItem = new ResumeItem;

        Object.assign(resumeItem, props);
        resumeItem.id = uuidv4();
        resumeItem.insertionDateTime = new Date();
        resumeItem.userId = userId;

        return resumeItem;
    } 

    static fromUpdateResumeItemDto(props: UpdateResumeItemDto): ResumeItem {
        let resumeItem: ResumeItem = new ResumeItem;

        Object.assign(resumeItem, props);     

        return resumeItem;
    }
}