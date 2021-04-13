import { LawyerRepository } from './lawyer.repository';
import { Lawyer } from './lawyer.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterLawyerDto } from './dto/filter-lawyer.dto';
import { CreateLawyerDto } from './dto/create-lawyer.dto';
import { UpdateLawyerDto } from './dto/update-lawyer.dto';
export declare class LawyersService {
    private repository;
    constructor(repository: LawyerRepository);
    getByFilter(filterDto: FilterLawyerDto): Promise<Lawyer[]>;
    getById(id: string): Promise<Lawyer>;
    create(createDto: CreateLawyerDto, user: User): Promise<Lawyer>;
    delete(id: string): Promise<void>;
    update(updateDto: UpdateLawyerDto): Promise<Lawyer>;
}
