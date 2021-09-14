import { BaseEntity } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { Article } from "../articles/article.entity";
import { CreateContentDto } from "./dto/create-content.dto";
import { UpdateContentDto } from "./dto/update-content.dto";
export declare class Content extends BaseEntity {
    id: string;
    userId: string;
    articleId: string;
    subTitle: string;
    description: string;
    image: string;
    order: number;
    active: boolean;
    insertionDateTime: Date;
    article: Article;
    user: User;
    static fromCreateDto(props: CreateContentDto, userId: string): Content;
    static fromUpdateArticleDto(props: UpdateContentDto): Content;
}
