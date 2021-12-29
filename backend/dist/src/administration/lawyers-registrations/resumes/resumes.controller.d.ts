import { ResumesService } from './resumes.service';
import { Resume } from './resume.entity';
import { User } from '../../configurations/users/user.entity';
import { FilterResumeDto } from './dto/filter-resume.dto';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
export declare class ResumesController {
    private service;
    constructor(service: ResumesService);
    getByFilter(filterDto: FilterResumeDto): Promise<Resume[]>;
    getById(id: string): Promise<Resume>;
    create(createDto: CreateResumeDto, user: User): Promise<Resume>;
    delete(id: string): Promise<void>;
    update(updateDto: UpdateResumeDto): Promise<Resume>;
}
