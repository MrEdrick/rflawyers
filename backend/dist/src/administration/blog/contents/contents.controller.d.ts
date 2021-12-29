import { ContentsService } from './contents.service';
import { Content } from './content.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterContentDto } from './dto/filter-content.dto';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
export declare class ContentsController {
    private service;
    constructor(service: ContentsService);
    getByFilter(filterDto: FilterContentDto): Promise<Content[]>;
    getById(id: string): Promise<Content>;
    create(createDto: CreateContentDto, user: User): Promise<Content>;
    delete(id: string): Promise<void>;
    update(updateDto: UpdateContentDto): Promise<Content>;
}
