import { IsString, Matches, MinLength, IsOptional, IsEmail } from "class-validator";

export class AuthCredentialsDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    @MinLength(4)
    username: string;

    @IsString()
    @MinLength(8)
    //@Matches(
    //    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    //    { message: 'Password too weak' })
    password: string;
} 