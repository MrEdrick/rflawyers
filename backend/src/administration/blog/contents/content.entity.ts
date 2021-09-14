import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Generated, ManyToOne } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { Article } from "../articles/article.entity";
import { CreateContentDto } from "./dto/create-content.dto";
import { UpdateContentDto } from "./dto/update-content.dto";

const { v4: uuidv4 } = require('uuid');

@Entity()
export class Content extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Generated('uuid')
    userId: string;
    
    @Column()
    @Generated('uuid')
    articleId: string;

    @Column({ nullable: true })
    subTitle: string;

    @Column()
    description: string;

    @Column({ nullable: true })
    image: string;

    @Column()
    order: number;

    @Column()
    active: boolean;

    @Column()
    insertionDateTime: Date;

    @ManyToOne(type => Article, article => article.contents, {eager: true})
    article: Article;

    @ManyToOne(type => User, user => user.lawyers, {eager: true})
    user: User;

    static fromCreateDto(props: CreateContentDto, userId: string): Content {
        let content: Content = new Content;

        Object.assign(content, props);
        content.id = uuidv4();
        content.insertionDateTime = new Date();
        content.userId = userId;

        return content;
    } 

    static fromUpdateArticleDto(props: UpdateContentDto): Content {
        let content: Content = new Content;

        Object.assign(content, props);     

        return content;
    }
}