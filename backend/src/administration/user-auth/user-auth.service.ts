import { Injectable, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../configurations/users/dto/create-user.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { UserJwtPayload } from './user-jwt-payload.interface';
import { User } from '../configurations/users/user.entity';
import { FilterUserDto } from '../configurations/users/dto/filter-user.dto';
import { AuthEmailConfirmationDto } from './dto/auth-email-confirmation.dto';
import { UsersService } from '../configurations/users/users.service';
import { AuthResetPasswordDto } from './dto/auth-reset-password.dto';

@Injectable()
export class UserAuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<User> {
        const filterUserDto = new FilterUserDto();

        filterUserDto.email = authCredentialsDto.email;

        if ((await this.usersService.getByFilter(filterUserDto)).length > 0) {
            throw new NotAcceptableException('Invalid credentials');
        }

        const createUserDto =
            CreateUserDto
                .fromAuthCredentialsDto(
                    authCredentialsDto,
                    (await this.usersService.count() === 0)
                );

        return await this.usersService.create(createUserDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        const { email, password } = authCredentialsDto;

        const user = await this.usersService.validatePassword(email, password);
        
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        if (user.confirmationToken) {
            throw new UnauthorizedException('E-mail not confirmed');
        }

        console.log(JSON.parse(JSON.stringify(user)));
        const payload: UserJwtPayload = JSON.parse(JSON.stringify(user));
        console.log(payload);
        const accessToken = await this.jwtService.sign(payload);
        console.log(accessToken);
        return { accessToken };
    }

    async emailConfirmation(authEmailConfirmationDto: AuthEmailConfirmationDto): Promise<boolean> {
        const filterUserDto = new FilterUserDto();
        filterUserDto.confirmationToken = authEmailConfirmationDto.confirmationToken;

        const user = (await this.usersService.getByFilter(filterUserDto))[0];

        let confirmed = false;
        if (user?.confirmationToken) {
            user.confirmationToken = null;
            await user.save();

            confirmed = (!user.confirmationToken);
        }

        return confirmed;
    }


    async resetPassword(authResetPasswordDto: AuthResetPasswordDto): Promise<boolean> {
        const filterUserDto = new FilterUserDto();
        filterUserDto.recoverToken = authResetPasswordDto.recoverToken;

        let user = (await this.usersService.getByFilter(filterUserDto))[0];

        let reseted = false;
        if (user?.recoverToken) {
            user =
                await this.usersService.updatePassword(
                    user, { id: user.id, password: authResetPasswordDto.password });

            reseted = (!user.recoverToken);
        }

        return reseted;
    }

    async recoverPassword(email: string): Promise<User> {
        return await this.usersService.repositoryRecoverPassword(email);
    }
}
