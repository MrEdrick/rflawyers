import { IsNotEmpty } from 'class-validator';

export class CreateResumeItemDto {   
    @IsNotEmpty()
    resumeId: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    active: boolean;
}