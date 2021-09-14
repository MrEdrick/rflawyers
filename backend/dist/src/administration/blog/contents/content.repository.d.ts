import { Repository } from "typeorm";
import { Content } from "./content.entity";
import { CreateContentDto } from "./dto/create-content.dto";
import { UpdateContentDto } from "./dto/update-content.dto";
import { FilterContentDto } from "./dto/filter-content.dto";
import { User } from "../../configurations/users/user.entity";
export declare class ContentRepository extends Repository<Content> {
    repositoryCreate(createDto: CreateContentDto, user: User): Promise<Content>;
    repositoryUpdate(updateDto: UpdateContentDto): Promise<Content>;
    repositoryGetByFilter(filterDto: FilterContentDto): Promise<Content[]>;
    repositoryGetCount(articleId: string): Promise<number>;
}
