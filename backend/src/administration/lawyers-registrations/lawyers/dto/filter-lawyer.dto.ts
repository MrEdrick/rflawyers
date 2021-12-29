import { IsOptional } from 'class-validator';

export class FilterLawyerDto {
    @IsOptional()
    userId: string;

    @IsOptional()
    firstName: string;
    
    @IsOptional()
    lastName: string;

    @IsOptional()
    description: string;

    @IsOptional()
    specializations: string;

    @IsOptional()
    languages: string;
    
    @IsOptional()
    oab: string;

    @IsOptional()
    active: boolean;
}