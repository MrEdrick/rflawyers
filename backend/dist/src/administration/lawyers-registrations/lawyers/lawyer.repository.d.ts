import { Repository } from "typeorm";
import { Lawyer } from "./lawyer.entity";
import { CreateLawyerDto } from "./dto/create-lawyer.dto";
import { UpdateLawyerDto } from "./dto/update-lawyer.dto";
import { FilterLawyerDto } from "./dto/filter-lawyer.dto";
import { User } from "../../configurations/users/user.entity";
export declare class LawyerRepository extends Repository<Lawyer> {
    repositoryCreate(createDto: CreateLawyerDto, user: User): Promise<Lawyer>;
    repositoryUpdate(updateDto: UpdateLawyerDto): Promise<Lawyer>;
    repositoryGetByFilter(filterDto: FilterLawyerDto): Promise<Lawyer[]>;
}
