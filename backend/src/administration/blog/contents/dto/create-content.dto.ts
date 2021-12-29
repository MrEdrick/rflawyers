import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateContentDto {   
    @IsNotEmpty()
    articleId: string;

    @IsNotEmpty()
    subTitle: string;

    @IsOptional()
    description: string;

    @IsOptional()
    image: string;
    
    @IsNotEmpty()
    active: boolean;
}