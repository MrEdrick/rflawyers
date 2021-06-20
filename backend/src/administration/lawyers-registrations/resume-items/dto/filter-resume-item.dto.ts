import { IsOptional } from 'class-validator';

export class FilterResumeItemDto {
    @IsOptional()
    lawyerItemId: string;

    @IsOptional()
    userId: string;

    @IsOptional()
    title: string;

    @IsOptional()
    description: string;

    @IsOptional()
    active: boolean;
}