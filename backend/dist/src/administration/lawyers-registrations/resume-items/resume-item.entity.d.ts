import { BaseEntity } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { Resume } from "../resumes/resume.entity";
import { CreateResumeItemDto } from "./dto/create-resume-item.dto";
import { UpdateResumeItemDto } from "./dto/update-resume-item.dto";
export declare class ResumeItem extends BaseEntity {
    id: string;
    userId: string;
    resumeId: string;
    title: string;
    description: string;
    active: boolean;
    insertionDateTime: Date;
    user: User;
    resume: Resume;
    static fromCreateDto(props: CreateResumeItemDto, userId: string): ResumeItem;
    static fromUpdateResumeItemDto(props: UpdateResumeItemDto): ResumeItem;
}
