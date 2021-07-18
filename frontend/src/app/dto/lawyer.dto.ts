export interface LawyerDto {
    id: string;
    userId: string;
    oab: number;
    firstName: string;
    lastName: string;
    description: string;
    specializations: string;
    languages: string;
    image: string;
    active: boolean;
    insertionDateTime: Date;
}
