import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateLawyerDto {   
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    description: string;

    @IsOptional()
    image: string;
    
    @IsNotEmpty()
    active: boolean;
}