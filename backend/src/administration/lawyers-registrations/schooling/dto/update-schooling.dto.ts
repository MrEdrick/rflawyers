import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateSchoolingDto {
    @IsNotEmpty()
    id: string;

    @IsOptional()
    lawyerId: string;

    @IsOptional()
    userId: string;
    
    @IsOptional()
    title: string;
    
    @IsOptional()
    description: string;

    @IsOptional()
    active: boolean;
}