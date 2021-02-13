"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSenderService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const email_sender_constants_1 = require("./email-sender.constants");
const config = require("config");
const EMAIL_SENDER = config.get('email-sender');
let EmailSenderService = class EmailSenderService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async contactUs(contactUsDto) {
        if (!EMAIL_SENDER.live) {
            return true;
        }
        try {
            const result = await this.mailerService.sendMail({
                template: email_sender_constants_1.CONTACT_US_TEMPLATE,
                context: contactUsDto,
                subject: `E-mail enviado para RODRIGUES & FRANCESCHINI Advogados Associados!`,
                to: EMAIL_SENDER,
            }).then(async () => {
                await this.mailerService.sendMail({
                    template: email_sender_constants_1.CONTACT_US_TEMPLATE,
                    context: contactUsDto,
                    subject: `Não responda: E-mail enviado para RODRIGUES & FRANCESCHINI Advogados Associados!`,
                    to: contactUsDto.email,
                }).catch((error) => {
                    console.log(error);
                });
            }).catch((error) => {
                console.log(error);
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async sendUserEmailConfirmation(emailConfirmationDto) {
        if (!EMAIL_SENDER.live) {
            return true;
        }
        try {
            const result = await this.mailerService.sendMail({
                template: email_sender_constants_1.USER_EMAIL_CONFIRMATION_TEMPLATE,
                context: emailConfirmationDto,
                subject: `Seja bem vindo(a)! Por favor, confirme seu endereço de e-mail`,
                to: emailConfirmationDto.email,
            });
            return result;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async sendUserRecoverPassword(recoverPasswordDto) {
        if (!EMAIL_SENDER.live) {
            return true;
        }
        try {
            const result = await this.mailerService.sendMail({
                template: email_sender_constants_1.USER_RECOVER_PASSWORD_TEMPLATE,
                context: recoverPasswordDto,
                subject: `Solicitação de alteração de senha!`,
                to: recoverPasswordDto.email,
            });
            return result;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
};
EmailSenderService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(mailer_1.MailerService)),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailSenderService);
exports.EmailSenderService = EmailSenderService;
//# sourceMappingURL=email-sender.service.js.map