import { IsOptional } from 'class-validator';

export class FilterResumeDto {
    @IsOptional()
    lawyerId: string;

    @IsOptional()
    userId: string;

    @IsOptional()
    title: string;

    @IsOptional()
    description: string;

    @IsOptional()
    active: boolean;
}