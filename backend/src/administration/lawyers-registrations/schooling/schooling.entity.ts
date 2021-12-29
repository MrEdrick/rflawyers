import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Generated, ManyToOne } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { Lawyer } from "../lawyers/lawyer.entity";
import { CreateSchoolingDto } from "./dto/create-schooling.dto";
import { UpdateSchoolingDto } from "./dto/update-schooling.dto";

const { v4: uuidv4 } = require('uuid');

@Entity()
export class Schooling extends BaseEntity {
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

    static fromCreateDto(props: CreateSchoolingDto, userId: string): Schooling {
        let schooling: Schooling = new Schooling;

        Object.assign(schooling, props);
        schooling.id = uuidv4();
        schooling.insertionDateTime = new Date();
        schooling.userId = userId;

        return schooling;
    } 

    static fromUpdateSchoolingDto(props: UpdateSchoolingDto): Schooling {
        let schooling: Schooling = new Schooling;

        Object.assign(schooling, props);     

        return schooling;
    }
}