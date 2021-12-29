import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateResumeItemDto {
    @IsNotEmpty()
    id: string;

    @IsOptional()
    resumeId: string;

    @IsOptional()
    userId: string;
    
    @IsOptional()
    title: string;
    
    @IsOptional()
    description: string;

    @IsOptional()
    active: boolean;
}