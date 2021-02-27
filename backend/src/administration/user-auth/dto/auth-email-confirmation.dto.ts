import { IsNotEmpty } from "class-validator";

export class AuthEmailConfirmationDto {
    @IsNotEmpty()
    confirmationToken: string;
} 