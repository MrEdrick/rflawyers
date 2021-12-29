import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateArticleDto {
    @IsNotEmpty()
    id: string;

    @IsOptional()
    userId: string;
    
    @IsOptional()
    title: string;

    @IsOptional()
    descripton: string;
    
    @IsOptional()
    date: Date;

    @IsOptional()
    image: string;

    @IsOptional()
    active: boolean;

    @IsOptional()
    published: boolean;
}