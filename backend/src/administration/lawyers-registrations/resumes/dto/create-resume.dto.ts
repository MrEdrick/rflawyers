import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateResumeDto {   
    @IsNotEmpty()
    lawyerId: string;

    @IsNotEmpty()
    title: string;

    @IsOptional()
    description: string;

    @IsNotEmpty()
    active: boolean;
}