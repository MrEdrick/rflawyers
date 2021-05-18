import { IsNotEmpty } from 'class-validator';

export class CreateResumeDto {   
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    active: boolean;
}