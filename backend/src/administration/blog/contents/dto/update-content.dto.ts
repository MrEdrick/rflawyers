import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateContentDto {
    @IsNotEmpty()
    id: string;

    @IsOptional()
    userId: string;

    @IsOptional()
    articleId: string;
    
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
}