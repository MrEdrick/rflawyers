import { ViewEntity, Connection, ViewColumn } from "typeorm";
import { Article } from "../articles/article.entity";
import { Lawyer } from "src/administration/lawyers-registrations/lawyers/lawyer.entity";

@ViewEntity({
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("article.id", "articleId")
        .addSelect("article.userId", "articleUserId")
        .addSelect("article.title", "articleTitle")
        .addSelect("article.description", "articleDescription")
        .addSelect("article.image", "articleImage")
        .addSelect("article.date", "articleDate")
        .addSelect("article.insertionDateTime", "articleInsertionDateTime")
        .addSelect("article.published", "articlePublished")
        .addSelect("article.active", "articleActive")
        .addSelect("lawyer.id", "lawyerId")
        .addSelect("lawyer.userId", "lawyerUserId")
        .addSelect("lawyer.firstName", "lawyerFirstName")
        .addSelect("lawyer.lastName", "lawyerLastName")
        .addSelect("lawyer.oab", "lawyerOab")
        .addSelect("lawyer.image", "lawyerImage")
        .from(Article, "article")
        .innerJoin(Lawyer,
            "lawyer",
            "article.lawyerId = lawyer.id")
})
export class ViewArticle {
    @ViewColumn()
    articleId: string;

    @ViewColumn()
    articleUserId: string;

    @ViewColumn()
    articleTitle: string;

    @ViewColumn()
    articleDescription: string;

    @ViewColumn()
    articleImage: string;

    @ViewColumn()
    articleDate: Date;

    @ViewColumn()
    articleInsertionDateTime: string;

    @ViewColumn()
    articlePublished: boolean;

    @ViewColumn()
    articleActive: boolean;

    @ViewColumn()
    lawyerId: string;

    @ViewColumn()
    lawyerUserId: string;

    @ViewColumn()
    lawyerFirstName: string;

    @ViewColumn()
    lawyerLastName: string;

    @ViewColumn()
    lawyerOab: number;

    @ViewColumn()
    lawyerImage: string;
}