import { Inject, Injectable, Logger } from '@nestjs/common';
import { EmailConfirmationDto } from './dto/email-confirmation.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { PERSON_EMAIL_CONFIRMATION_TEMPLATE, PERSON_RECOVER_PASSWORD_TEMPLATE, USER_EMAIL_CONFIRMATION_TEMPLATE, USER_RECOVER_PASSWORD_TEMPLATE } from './email-sender.constants';

import * as config from 'config'
import { RecoverPasswordDto } from './dto/recover-password.dto';

const EMAIL_SENDER = config.get('email-sender');

@Injectable()
export class EmailSenderService {
    constructor(
        @Inject(MailerService)
        private mailerService: MailerService) { }

    async sendUserEmailConfirmation(emailConfirmationDto: EmailConfirmationDto): Promise<boolean> {
        if (!EMAIL_SENDER.live) {
            return true;
        }

        try {
            const result = await this.mailerService.sendMail({
                template: USER_EMAIL_CONFIRMATION_TEMPLATE,
                context: emailConfirmationDto,
                subject: `Seja bem vinda à Docephie! Por favor, confirme seu endereço de e-mail`,
                to: emailConfirmationDto.email,
            })

            return result;

        } catch (error) {
            console.log(error);

            throw error
        }
    }

    async sendUserRecoverPassword(recoverPasswordDto: RecoverPasswordDto): Promise<boolean> {
        if (!EMAIL_SENDER.live) {
            return true;
        }

        try {
            const result = await this.mailerService.sendMail({
                template: USER_RECOVER_PASSWORD_TEMPLATE,
                context: recoverPasswordDto,
                subject: `Solicitação de alteração de senha!`,
                to: recoverPasswordDto.email,
            })

            return result;

        } catch (error) {
            console.log(error);

            throw error
        }
    }

    async sendPersonEmailConfirmation(emailConfirmationDto: EmailConfirmationDto): Promise<boolean> {
        if (!EMAIL_SENDER.live) {
            return true;
        }

        try {
            const result = await this.mailerService.sendMail({
                template: PERSON_EMAIL_CONFIRMATION_TEMPLATE,
                context: emailConfirmationDto,
                subject: `Seja bem vinda à Docephie! Por favor, confirme seu endereço de e-mail`,
                to: emailConfirmationDto.email,
            })

            return result;

        } catch (error) {
            console.log(error);

            throw error
        }
    }

    async sendPersonRecoverPassword(recoverPasswordDto: RecoverPasswordDto): Promise<boolean> {
        if (!EMAIL_SENDER.live) {
            return true;
        }

        try {
            const result = await this.mailerService.sendMail({
                template: PERSON_RECOVER_PASSWORD_TEMPLATE,
                context: recoverPasswordDto,
                subject: `Solicitação de alteração de senha!`,
                to: recoverPasswordDto.email,
            })

            return result;

        } catch (error) {
            console.log(error);

            throw error
        }
    }

}