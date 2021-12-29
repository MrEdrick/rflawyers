import { Module } from '@nestjs/common'
import { MailerModule } from '@nestjs-modules/mailer'
import { EmailSenderService } from './email-sender.service'
import { EmailSenderController } from './email-sender.controller'
import { EMAIL_SENDER_CONFIG } from './email-sender.config'

@Module({
    imports: [
        MailerModule.forRoot(EMAIL_SENDER_CONFIG)
    ],
    controllers: [
        EmailSenderController
    ],
    providers: [
        EmailSenderService,
    ],
    exports: [
        MailerModule,
        EmailSenderService
    ]
})
export class EmailSenderModule { }
