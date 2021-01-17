import { IsNotEmpty } from "class-validator";

export class EmailConfirmationDto {
    @IsNotEmpty()
    urlFrontEnd: string;
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    confirmationToken: string;
}