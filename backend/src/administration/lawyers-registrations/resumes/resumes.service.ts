import { Injectable, NotFoundException } from '@nestjs/common';
import { ResumeRepository } from './resume.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Resume } from './resume.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterResumeDto } from './dto/filter-resume.dto';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';


@Injectable()
export class ResumesService {
    constructor(
        @InjectRepository(ResumeRepository)
        private repository: ResumeRepository
    ) {}

    getByFilter(filterDto: FilterResumeDto): Promise<Resume[]> {
        return this.repository.repositoryGetByFilter(filterDto);
    }

    async getById(id: string): Promise<Resume> {
        const found = await this.repository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return found;
    }

    create(createDto: CreateResumeDto, user: User): Promise<Resume> {
        return this.repository.repositoryCreate(createDto, user);
    }

    async delete(id: string): Promise<void> {
        const result = await this.repository.delete(id);
        if (result.affected == 0) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return;
    }

    update(updateDto: UpdateResumeDto): Promise<Resume> {
        return this.repository.repositoryUpdate(updateDto);
    }

}
