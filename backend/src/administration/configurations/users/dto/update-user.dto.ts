import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateUserDto {
    @IsNotEmpty()
    id: string;

    @IsOptional()
    name: string;
    
    @IsOptional()
    email: string;

    @IsOptional()
    username: string;

    @IsOptional()
    image: string;

    @IsOptional()
    active: boolean;

    @IsOptional()
    isAdministrator: boolean;
}