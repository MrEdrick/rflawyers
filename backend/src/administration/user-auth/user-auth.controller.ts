import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserAuthService } from './user-auth.service';
import { User } from '../configurations/users/user.entity';
import { AuthEmailConfirmationDto } from './dto/auth-email-confirmation.dto';
import { AuthResetPasswordDto } from './dto/auth-reset-password.dto';

@Controller('adm/user-auth')
export class UserAuthController {
    constructor(private service: UserAuthService) { }

    @Post('singup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<User> {
        return this.service.signUp(authCredentialsDto);
    }

    @Post('singin')
    signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.service.signIn(authCredentialsDto);
    }

    @Post('email-confirmation')
    emailConfirmation(@Body(ValidationPipe) authEmailConfirmationDto: AuthEmailConfirmationDto): Promise<boolean> {
        return this.service.emailConfirmation(authEmailConfirmationDto);
    }

    @Post('recover-password')
    recoverPassword(@Body(ValidationPipe) recoverPassword: { email: string }): Promise<User> {
        return this.service.recoverPassword(recoverPassword.email);
    }

    @Post('reset-password')
    resetPassword(@Body(ValidationPipe) authResetPasswordDto: AuthResetPasswordDto): Promise<boolean> {
        return this.service.resetPassword(authResetPasswordDto);
    }
}
