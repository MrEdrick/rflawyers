import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EMAIL_SENDER } from './email-sender.constants';
import * as path from 'path';

export const EMAIL_SENDER_CONFIG: MailerOptions = {
    template: {
        dir: path.resolve(__dirname, '..', '..', 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
            extName: '.hbs',
            strict: false,
            layoutsDir: path.resolve(__dirname, '..', '..', 'templates'),
        },
    },
    transport: {
        host: EMAIL_SENDER.host,
        port: EMAIL_SENDER.port,
        secure: EMAIL_SENDER.secure,
        tls: { ciphers: 'SSLv3', }, // gmail
        auth: {
            user: EMAIL_SENDER.user,
            pass: EMAIL_SENDER.pass,
        },
    },
};