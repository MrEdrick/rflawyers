import { Repository } from "typeorm";
import { Schooling } from "./schooling.entity";
import { CreateSchoolingDto } from "./dto/create-schooling.dto";
import { UpdateSchoolingDto } from "./dto/update-schooling.dto";
import { FilterSchoolingDto } from "./dto/filter-schooling.dto";
import { User } from "../../configurations/users/user.entity";
export declare class SchoolingRepository extends Repository<Schooling> {
    repositoryCreate(createDto: CreateSchoolingDto, user: User): Promise<Schooling>;
    repositoryUpdate(updateDto: UpdateSchoolingDto): Promise<Schooling>;
    repositoryGetByFilter(filterDto: FilterSchoolingDto): Promise<Schooling[]>;
}
