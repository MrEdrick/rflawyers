import { AuthCredentialsDto } from '../../../user-auth/dto/auth-credentials.dto';
export declare class CreateUserDto {
    name: string;
    email: string;
    username: string;
    password: string;
    image: string;
    isDefault: boolean;
    active: boolean;
    isAdministrator: boolean;
    static fromAuthCredentialsDto(props: AuthCredentialsDto, isFirstUser: boolean): CreateUserDto;
}
