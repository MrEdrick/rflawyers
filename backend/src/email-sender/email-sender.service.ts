import { Inject, Injectable } from '@nestjs/common';
import { EmailConfirmationDto } from './dto/email-confirmation.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { CONTACT_US_TEMPLATE, USER_EMAIL_CONFIRMATION_TEMPLATE, USER_RECOVER_PASSWORD_TEMPLATE } from './email-sender.constants';

import * as config from 'config'
import { RecoverPasswordDto } from './dto/recover-password.dto';
import { ContactUsDto } from './dto/contact-us.dto';

const EMAIL_SENDER = config.get('email-sender');

@Injectable()
export class EmailSenderService {
    constructor(
        @Inject(MailerService)
        private mailerService: MailerService) { }

    async contactUs(contactUsDto: ContactUsDto): Promise<any> {
        if (!EMAIL_SENDER.live) {
            return true;
        }

        try {
            const result = await this.mailerService.sendMail({
                template: CONTACT_US_TEMPLATE,
                context: contactUsDto,
                subject: `E-mail enviado para RODRIGUES & FRANCESCHINI Advogados Associados!`,
                to: EMAIL_SENDER,
            }).then(async () => {
                await this.mailerService.sendMail({
                    template: CONTACT_US_TEMPLATE,
                    context: contactUsDto,
                    subject: `Não responda: E-mail enviado para RODRIGUES & FRANCESCHINI Advogados Associados!`,
                    to: contactUsDto.email,
                }).catch((error) => {
                    console.log(error);
                })
            }).catch((error) => {
                console.log(error);
            });

            return result;
        } catch (error) {
            throw error
        }
    }

    async sendUserEmailConfirmation(emailConfirmationDto: EmailConfirmationDto): Promise<boolean> {
        if (!EMAIL_SENDER.live) {
            return true;
        }

        try {
            const result = await this.mailerService.sendMail({
                template: USER_EMAIL_CONFIRMATION_TEMPLATE,
                context: emailConfirmationDto,
                subject: `Seja bem vindo(a)! Por favor, confirme seu endereço de e-mail`,
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

}