import { IsOptional } from 'class-validator';

export class FilterLawyerDto {
    @IsOptional()
    userId: string;

    @IsOptional()
    name: string;

    @IsOptional()
    active: boolean;
}