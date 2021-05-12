import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateLawyerDto {
    @IsNotEmpty()
    id: string;

    @IsOptional()
    userId: string;
    
    @IsOptional()
    firstName: string;

    @IsOptional()
    lastName: string;

    @IsOptional()
    descripton: string;

    @IsOptional()
    oab: string;

    @IsOptional()
    image: string;

    @IsOptional()
    active: boolean;
}