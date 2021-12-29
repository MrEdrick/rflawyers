import { ContentRepository } from './content.repository';
import { Content } from './content.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterContentDto } from './dto/filter-content.dto';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
export declare class ContentsService {
    private repository;
    constructor(repository: ContentRepository);
    getByFilter(filterDto: FilterContentDto): Promise<Content[]>;
    getById(id: string): Promise<Content>;
    create(createDto: CreateContentDto, user: User): Promise<Content>;
    delete(id: string): Promise<void>;
    update(updateDto: UpdateContentDto): Promise<Content>;
}
