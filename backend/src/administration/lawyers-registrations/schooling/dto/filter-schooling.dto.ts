import { IsOptional } from 'class-validator';

export class FilterSchoolingDto {
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