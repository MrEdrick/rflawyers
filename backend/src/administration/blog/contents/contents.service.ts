import { Injectable, NotFoundException } from '@nestjs/common';
import { ContentRepository } from './content.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from './content.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterContentDto } from './dto/filter-content.dto';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';


@Injectable()
export class ContentsService {
    constructor(
        @InjectRepository(ContentRepository)
        private repository: ContentRepository
    ) {}

    getByFilter(filterDto: FilterContentDto): Promise<Content[]> {
        return this.repository.repositoryGetByFilter(filterDto);
    }

    async getById(id: string): Promise<Content> {
        const found = await this.repository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return found;
    }

    create(createDto: CreateContentDto, user: User): Promise<Content> {
        return this.repository.repositoryCreate(createDto, user);
    }

    async delete(id: string): Promise<void> {
        const result = await this.repository.delete(id);
        if (result.affected == 0) {
            throw new NotFoundException(`Record with ID "${id}" not found`);
        }

        return;
    }

    update(updateDto: UpdateContentDto): Promise<Content> {
        return this.repository.repositoryUpdate(updateDto);
    }

}
