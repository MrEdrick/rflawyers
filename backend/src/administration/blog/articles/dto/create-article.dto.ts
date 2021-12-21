import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateArticleDto {   
    @IsNotEmpty()
    title: string;

    @IsOptional()
    description: string;

    @IsNotEmpty()
    date: Date;

    @IsOptional()
    image: string;
    
    @IsNotEmpty()
    active: boolean;
}