import { BaseEntity } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { Lawyer } from "../lawyers/lawyer.entity";
import { CreateSchoolingDto } from "./dto/create-schooling.dto";
import { UpdateSchoolingDto } from "./dto/update-schooling.dto";
export declare class Schooling extends BaseEntity {
    id: string;
    userId: string;
    lawyerId: string;
    title: string;
    description: string;
    active: boolean;
    insertionDateTime: Date;
    user: User;
    lawyer: Lawyer;
    static fromCreateDto(props: CreateSchoolingDto, userId: string): Schooling;
    static fromUpdateSchoolingDto(props: UpdateSchoolingDto): Schooling;
}
