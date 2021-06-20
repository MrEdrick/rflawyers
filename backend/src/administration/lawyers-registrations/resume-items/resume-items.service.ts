import { Injectable, NotFoundException } from '@nestjs/common';
import { ResumeItemRepository } from './resume-item.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ResumeItem } from './resume-item.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterResumeItemDto } from './dto/filter-resume-item.dto';
import { CreateResumeItemDto } from './dto/create-resume-item.dto';
import { UpdateResumeItemDto } from './dto/update-resume-item.dto';


@Injectable()
export class ResumeItemsService {
    constructor(
        @InjectRepository(ResumeItemRepository)
        private repository: ResumeItemRepository
    ) {}

    getByFilter(filterDto: FilterResumeItemDto): Promise<ResumeItem[]> {
        return this.repository.repositoryGetByFilter(filterDto);
    }

    async getById(id: string): Promise<ResumeItem> {
        const found = await this.repository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return found;
    }

    create(createDto: CreateResumeItemDto, user: User): Promise<ResumeItem> {
        return this.repository.repositoryCreate(createDto, user);
    }

    async delete(id: string): Promise<void> {
        const result = await this.repository.delete(id);
        if (result.affected == 0) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return;
    }

    update(updateDto: UpdateResumeItemDto): Promise<ResumeItem> {
        return this.repository.repositoryUpdate(updateDto);
    }

}
