import { IsOptional } from 'class-validator';

export class FilterViewArticleDto {
    @IsOptional()
    articleId: string;

    @IsOptional()
    articleUserId: string;

    @IsOptional()
    articleTitle: string;

    @IsOptional()
    articleDescription: string;

    @IsOptional()
    articleImage: string;

    @IsOptional()
    articleDate: Date;

    @IsOptional()
    articleInsertionDateTime: string;

    @IsOptional()
    articlePublished: boolean;

    @IsOptional()
    articleActive: boolean;

    @IsOptional()
    lawyerId: string;

    @IsOptional()
    lawyerUserId: string;

    @IsOptional()
    lawyerFirstName: string;

    @IsOptional()
    lawyerLastName: string;

    @IsOptional()
    lawyerOab: number;

    @IsOptional()
    lawyerImage: string;
}