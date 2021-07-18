import { Injectable, NotFoundException } from '@nestjs/common';
import { SchoolingRepository } from './schooling.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Schooling } from './schooling.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterSchoolingDto } from './dto/filter-schooling.dto';
import { CreateSchoolingDto } from './dto/create-schooling.dto';
import { UpdateSchoolingDto } from './dto/update-schooling.dto';


@Injectable()
export class SchoolingService {
    constructor(
        @InjectRepository(SchoolingRepository)
        private repository: SchoolingRepository
    ) {}

    getByFilter(filterDto: FilterSchoolingDto): Promise<Schooling[]> {
        return this.repository.repositoryGetByFilter(filterDto);
    }

    async getById(id: string): Promise<Schooling> {
        const found = await this.repository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return found;
    }

    create(createDto: CreateSchoolingDto, user: User): Promise<Schooling> {
        return this.repository.repositoryCreate(createDto, user);
    }

    async delete(id: string): Promise<void> {
        const result = await this.repository.delete(id);
        if (result.affected == 0) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return;
    }

    update(updateDto: UpdateSchoolingDto): Promise<Schooling> {
        return this.repository.repositoryUpdate(updateDto);
    }

}
