import { Lawyer } from "src/administration/lawyers-registrations/lawyers/lawyer.entity";
import { BaseEntity } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { Content } from "../contents/content.entity";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";
export declare class Article extends BaseEntity {
    id: string;
    userId: string;
    lawyerId: string;
    title: string;
    description: string;
    date: Date;
    image: string;
    active: boolean;
    insertionDateTime: Date;
    contents: Content[];
    lawyer: Lawyer;
    user: User;
    static fromCreateDto(props: CreateArticleDto, userId: string): Article;
    static fromUpdateArticleDto(props: UpdateArticleDto): Article;
}
