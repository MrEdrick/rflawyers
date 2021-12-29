import { IsNotEmpty } from "class-validator";

export class UpdateUserPasswordDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    password: string;
}