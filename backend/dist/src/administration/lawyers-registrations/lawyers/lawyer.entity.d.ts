import { BaseEntity } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { Resume } from "../resumes/resume.entity";
import { CreateLawyerDto } from "./dto/create-lawyer.dto";
import { UpdateLawyerDto } from "./dto/update-lawyer.dto";
export declare class Lawyer extends BaseEntity {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    description: string;
    specializations: string;
    languages: string;
    oab: number;
    image: string;
    active: boolean;
    insertionDateTime: Date;
    resumes: Resume[];
    user: User;
    static fromCreateDto(props: CreateLawyerDto, userId: string): Lawyer;
    static fromUpdateLawyerDto(props: UpdateLawyerDto): Lawyer;
}
