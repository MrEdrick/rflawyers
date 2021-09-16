import { Lawyer } from "src/administration/lawyers-registrations/lawyers/lawyer.entity";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Generated, ManyToOne, OneToMany } from "typeorm";
import { User } from "../../configurations/users/user.entity";
import { Content } from "../contents/content.entity";
import { CreateArticleDto } from "./dto/create-article.dto";
import { UpdateArticleDto } from "./dto/update-article.dto";

const { v4: uuidv4 } = require('uuid');

@Entity()
export class Article extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Generated('uuid')
    userId: string;
    
    @Column()
    @Generated('uuid')
    lawyerId: string;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    date: Date;

    @Column({ nullable: true })
    image: string;

    @Column()
    active: boolean;
    
    @Column()
    published: boolean;

    @Column()
    insertionDateTime: Date;

    @OneToMany(type => Content, content => content.article, { eager: false })
    contents: Content[];

    @ManyToOne(type => Lawyer, lawyer => lawyer.articles, {eager: true})
    lawyer: Lawyer;

    @ManyToOne(type => User, user => user.lawyers, {eager: true})
    user: User;

    static fromCreateDto(props: CreateArticleDto, userId: string): Article {
        let article: Article = new Article;

        Object.assign(article, props);
        article.id = uuidv4();
        article.insertionDateTime = new Date();
        article.userId = userId;
        article.published = true;

        return article;
    } 

    static fromUpdateArticleDto(props: UpdateArticleDto): Article {
        let article: Article = new Article;

        Object.assign(article, props);     

        return article;
    }
}