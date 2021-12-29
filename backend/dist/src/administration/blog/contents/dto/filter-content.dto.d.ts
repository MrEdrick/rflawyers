export declare class FilterContentDto {
    userId: string;
    articleId: string;
    title: string;
    description: string;
    date: Date;
    active: boolean;
    orderBySort: string;
    orderByOrder: "ASC" | "DESC";
}
