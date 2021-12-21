import { LawyerDto } from "./lawyer.dto";

export interface ArticleDto {
    id: string;
    userId: string;
    lawyerId: string;
    title: string;
    description: string;
    date: Date;
    image: string;
    active: boolean;
    insertionDateTime: Date;

    lawyer: LawyerDto;
}
