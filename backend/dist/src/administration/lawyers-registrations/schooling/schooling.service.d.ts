import { SchoolingRepository } from './schooling.repository';
import { Schooling } from './schooling.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterSchoolingDto } from './dto/filter-schooling.dto';
import { CreateSchoolingDto } from './dto/create-schooling.dto';
import { UpdateSchoolingDto } from './dto/update-schooling.dto';
export declare class SchoolingService {
    private repository;
    constructor(repository: SchoolingRepository);
    getByFilter(filterDto: FilterSchoolingDto): Promise<Schooling[]>;
    getById(id: string): Promise<Schooling>;
    create(createDto: CreateSchoolingDto, user: User): Promise<Schooling>;
    delete(id: string): Promise<void>;
    update(updateDto: UpdateSchoolingDto): Promise<Schooling>;
}
