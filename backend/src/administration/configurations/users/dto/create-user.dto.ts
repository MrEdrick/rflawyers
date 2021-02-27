import { IsNotEmpty, IsOptional } from 'class-validator';
import { Exclude } from 'class-transformer';
import { AuthCredentialsDto } from '../../../user-auth/dto/auth-credentials.dto';

@Exclude()
export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsOptional()
    image: string;

    @IsNotEmpty()
    isDefault: boolean;

    @IsNotEmpty()
    active: boolean;

    @IsNotEmpty()
    isAdministrator: boolean;

    static fromAuthCredentialsDto(props: AuthCredentialsDto, isFirstUser: boolean): CreateUserDto {
        const createUserDto = new CreateUserDto();

        Object.assign(createUserDto, props);

        createUserDto.active = true;
        createUserDto.isDefault = isFirstUser;
        createUserDto.isAdministrator = isFirstUser;

        return createUserDto;
    }
}