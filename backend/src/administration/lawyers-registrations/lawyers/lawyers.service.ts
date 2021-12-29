import { Injectable, NotFoundException } from '@nestjs/common';
import { LawyerRepository } from './lawyer.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Lawyer } from './lawyer.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterLawyerDto } from './dto/filter-lawyer.dto';
import { CreateLawyerDto } from './dto/create-lawyer.dto';
import { UpdateLawyerDto } from './dto/update-lawyer.dto';


@Injectable()
export class LawyersService {
    constructor(
        @InjectRepository(LawyerRepository)
        private repository: LawyerRepository
    ) {}

    getByFilter(filterDto: FilterLawyerDto): Promise<Lawyer[]> {
        return this.repository.repositoryGetByFilter(filterDto);
    }

    async getById(id: string): Promise<Lawyer> {
        const found = await this.repository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return found;
    }

    create(createDto: CreateLawyerDto, user: User): Promise<Lawyer> {
        return this.repository.repositoryCreate(createDto, user);
    }

    async delete(id: string): Promise<void> {
        const result = await this.repository.delete(id);
        if (result.affected == 0) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return;
    }

    update(updateDto: UpdateLawyerDto): Promise<Lawyer> {
        return this.repository.repositoryUpdate(updateDto);
    }

}
