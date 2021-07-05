import { Repository, EntityRepository } from "typeorm";
import { Resume } from "./resume.entity";
import { CreateResumeDto } from "./dto/create-resume.dto";
import { UpdateResumeDto } from "./dto/update-resume.dto";
import { FilterResumeDto } from "./dto/filter-resume.dto";
import { EnumErrorCodes } from "../../../enums/enum-errorcodes";
import { ConflictException } from "@nestjs/common";
import { User } from "../../configurations/users/user.entity";
import { Exception } from "handlebars";

@EntityRepository(Resume)
export class ResumeRepository extends Repository<Resume> {
    async repositoryCreate(createDto: CreateResumeDto, user: User): Promise<Resume> {
        const datas = Resume.fromCreateDto(createDto, user.id);

        try {
            await this.save(datas);
        } catch (error) {
            if (error.code == EnumErrorCodes.DUPLICATED_DATA) {
                throw new ConflictException('Some data is duplicated');
            } else {
                console.log(error);
                throw new Exception(error);
            }
        }

        return datas;
    }

    async repositoryUpdate(updateDto: UpdateResumeDto): Promise<Resume> {
        const datas = Resume.fromUpdateResumeDto(updateDto);

        try {
            await this.save({ ...datas, id: datas.id });
        } catch (error) {
            if (error.code == EnumErrorCodes.DUPLICATED_DATA) {
                throw new ConflictException('Some data is duplicated');
            }
        }

        return datas;
    }

    async repositoryGetByFilter(filterDto: FilterResumeDto): Promise<Resume[]> {
        const query = this.createQueryBuilder(this.metadata.tableName);
        const { userId, title, description, active } = filterDto;

        if (filterDto.userId) {
            query.andWhere(`"userId" = ${userId}`);
        }

        if (filterDto.title) {
            query.andWhere(`"title" ILIKE '%${title}%'`);
        }

        if (filterDto.description) {
            query.andWhere(`"description" ILIKE '%${description}%'`);
        }

        if (filterDto.active) {
            query.andWhere(`"active" = ${active}`);
        }
        
        return await query.getMany();
    }
}