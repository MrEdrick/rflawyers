import {IsOptional} from 'class-validator';

export class FilterUserDto {
    @IsOptional()
    name: string;
    
    @IsOptional()
    email: string;

    @IsOptional()
    username: string;

    @IsOptional()
    active: boolean;
    
    @IsOptional()
    isDefault: boolean;

    @IsOptional()
    isAdministrator: boolean;

    @IsOptional()
    confirmationToken: string;

    @IsOptional()
    recoverToken: string
}