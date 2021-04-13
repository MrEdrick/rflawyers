import { EmailConfirmationDto } from './dto/email-confirmation.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { RecoverPasswordDto } from './dto/recover-password.dto';
import { ContactUsDto } from './dto/contact-us.dto';
export declare class EmailSenderService {
    private mailerService;
    constructor(mailerService: MailerService);
    contactUs(contactUsDto: ContactUsDto): Promise<any>;
    sendUserEmailConfirmation(emailConfirmationDto: EmailConfirmationDto): Promise<boolean>;
    sendUserRecoverPassword(recoverPasswordDto: RecoverPasswordDto): Promise<boolean>;
}
