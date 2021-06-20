import { IsNotEmpty } from 'class-validator';

export class CreateResumeDto {   
    @IsNotEmpty()
    lawyerId: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    active: boolean;
}