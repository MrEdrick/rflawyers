import { Repository } from "typeorm";
import { Resume } from "./resume.entity";
import { CreateResumeDto } from "./dto/create-resume.dto";
import { UpdateResumeDto } from "./dto/update-resume.dto";
import { FilterResumeDto } from "./dto/filter-resume.dto";
import { User } from "../../configurations/users/user.entity";
export declare class ResumeRepository extends Repository<Resume> {
    repositoryCreate(createDto: CreateResumeDto, user: User): Promise<Resume>;
    repositoryUpdate(updateDto: UpdateResumeDto): Promise<Resume>;
    repositoryGetByFilter(filterDto: FilterResumeDto): Promise<Resume[]>;
}
