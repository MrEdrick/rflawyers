import { Repository } from "typeorm";
import { ResumeItem } from "./resume-item.entity";
import { CreateResumeItemDto } from "./dto/create-resume-item.dto";
import { UpdateResumeItemDto } from "./dto/update-resume-item.dto";
import { FilterResumeItemDto } from "./dto/filter-resume-item.dto";
import { User } from "../../configurations/users/user.entity";
export declare class ResumeItemRepository extends Repository<ResumeItem> {
    repositoryCreate(createDto: CreateResumeItemDto, user: User): Promise<ResumeItem>;
    repositoryUpdate(updateDto: UpdateResumeItemDto): Promise<ResumeItem>;
    repositoryGetByFilter(filterDto: FilterResumeItemDto): Promise<ResumeItem[]>;
}
