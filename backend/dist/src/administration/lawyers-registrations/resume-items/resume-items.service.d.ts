import { ResumeItemRepository } from './resume-item.repository';
import { ResumeItem } from './resume-item.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterResumeItemDto } from './dto/filter-resume-item.dto';
import { CreateResumeItemDto } from './dto/create-resume-item.dto';
import { UpdateResumeItemDto } from './dto/update-resume-item.dto';
export declare class ResumeItemsService {
    private repository;
    constructor(repository: ResumeItemRepository);
    getByFilter(filterDto: FilterResumeItemDto): Promise<ResumeItem[]>;
    getById(id: string): Promise<ResumeItem>;
    create(createDto: CreateResumeItemDto, user: User): Promise<ResumeItem>;
    delete(id: string): Promise<void>;
    update(updateDto: UpdateResumeItemDto): Promise<ResumeItem>;
}
