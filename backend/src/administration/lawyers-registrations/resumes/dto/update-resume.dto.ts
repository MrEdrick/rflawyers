import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateResumeDto {
    @IsNotEmpty()
    id: string;

    @IsOptional()
    userId: string;
    
    @IsOptional()
    name: string;

    @IsOptional()
    active: boolean;
}