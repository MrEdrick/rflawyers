export interface ArticleDto {
    id: string;
    userId: string;
    title: string;
    description: string;
    date: Date;
    image: string;
    active: boolean;
    insertionDateTime: Date;
}
