import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserAuthService } from './user-auth.service';
import { User } from '../configurations/users/user.entity';
import { AuthEmailConfirmationDto } from './dto/auth-email-confirmation.dto';
import { AuthResetPasswordDto } from './dto/auth-reset-password.dto';
export declare class UserAuthController {
    private service;
    constructor(service: UserAuthService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<User>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
    emailConfirmation(authEmailConfirmationDto: AuthEmailConfirmationDto): Promise<boolean>;
    recoverPassword(recoverPassword: {
        email: string;
    }): Promise<User>;
    resetPassword(authResetPasswordDto: AuthResetPasswordDto): Promise<boolean>;
}
