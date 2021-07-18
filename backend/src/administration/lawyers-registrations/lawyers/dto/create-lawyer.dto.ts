import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateLawyerDto {   
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsOptional()
    description: string;

    @IsOptional()
    specializations: string;

    @IsOptional()
    languages: string;

    @IsNotEmpty()
    oab: number;

    @IsOptional()
    image: string;
    
    @IsNotEmpty()
    active: boolean;
}