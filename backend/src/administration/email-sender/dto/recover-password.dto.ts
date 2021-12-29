import { IsNotEmpty } from "class-validator";

export class RecoverPasswordDto {
    @IsNotEmpty()
    urlFrontEnd: string;
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    recoverToken: string;
}