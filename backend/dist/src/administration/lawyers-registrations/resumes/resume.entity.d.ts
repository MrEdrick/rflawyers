import { BaseEntity } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { Lawyer } from "../lawyers/lawyer.entity";
import { CreateResumeDto } from "./dto/create-resume.dto";
import { UpdateResumeDto } from "./dto/update-resume.dto";
export declare class Resume extends BaseEntity {
    id: string;
    userId: string;
    lawyerId: string;
    title: string;
    description: string;
    active: boolean;
    insertionDateTime: Date;
    user: User;
    lawyer: Lawyer;
    static fromCreateDto(props: CreateResumeDto, userId: string): Resume;
    static fromUpdateResumeDto(props: UpdateResumeDto): Resume;
}
