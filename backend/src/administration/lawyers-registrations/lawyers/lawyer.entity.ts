import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Generated, Unique, ManyToOne, OneToMany } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { CreateLawyerDto } from "./dto/create-lawyer.dto";
import { UpdateLawyerDto } from "./dto/update-lawyer.dto";

const { v4: uuidv4 } = require('uuid');

@Entity()
export class Lawyer extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Generated('uuid')
    userId: string;
    
    @Column()
    fisrtName: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    image: string;

    @Column()
    active: boolean;

    @Column()
    insertionDateTime: Date;

    @ManyToOne(type => User, user => user.lawyers, {eager: true})
    user: User;

    static fromCreateDto(props: CreateLawyerDto, userId: string): Lawyer {
        let lawyer: Lawyer = new Lawyer;

        Object.assign(lawyer, props);
        lawyer.id = uuidv4();
        lawyer.insertionDateTime = new Date();
        lawyer.userId = userId;

        return lawyer;
    } 

    static fromUpdateLawyerDto(props: UpdateLawyerDto): Lawyer {
        let lawyer: Lawyer = new Lawyer;

        Object.assign(lawyer, props);     

        return lawyer;
    }
}