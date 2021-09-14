import { IsOptional } from 'class-validator';

export class FilterArticleDto {
    @IsOptional()
    userId: string;

    @IsOptional()
    title: string;

    @IsOptional()
    description: string;
    
    @IsOptional()
    date: Date;

    @IsOptional()
    active: boolean;
}