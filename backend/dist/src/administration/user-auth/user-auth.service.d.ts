import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '../configurations/users/user.entity';
import { AuthEmailConfirmationDto } from './dto/auth-email-confirmation.dto';
import { UsersService } from '../configurations/users/users.service';
import { AuthResetPasswordDto } from './dto/auth-reset-password.dto';
export declare class UserAuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<User>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
    emailConfirmation(authEmailConfirmationDto: AuthEmailConfirmationDto): Promise<boolean>;
    resetPassword(authResetPasswordDto: AuthResetPasswordDto): Promise<boolean>;
    recoverPassword(email: string): Promise<User>;
}
