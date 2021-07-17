export interface ResumeItemDto {
    id: string;
    resumeId: string;
    userId: string;
    title: string;
    description: string;
    active: boolean;
    insertionDateTime: Date;
}
