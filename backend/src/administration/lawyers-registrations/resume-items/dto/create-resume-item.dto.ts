import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateResumeItemDto {   
    @IsNotEmpty()
    resumeId: string;

    @IsNotEmpty()
    title: string;

    @IsOptional()
    description: string;

    @IsNotEmpty()
    active: boolean;
}