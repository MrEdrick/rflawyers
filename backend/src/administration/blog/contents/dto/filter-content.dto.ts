import { IsOptional } from 'class-validator';

export class FilterContentDto {
    @IsOptional()
    userId: string;

    @IsOptional()
    articleId: string;

    @IsOptional()
    title: string;

    @IsOptional()
    description: string;
    
    @IsOptional()
    date: Date;

    @IsOptional()
    active: boolean;

    @IsOptional()
    orderBySort: string;

    @IsOptional()
    orderByOrder: "ASC" | "DESC";
}