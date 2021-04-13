"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailSenderModule = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const email_sender_service_1 = require("./email-sender.service");
const email_sender_controller_1 = require("./email-sender.controller");
const email_sender_config_1 = require("./email-sender.config");
let EmailSenderModule = class EmailSenderModule {
};
EmailSenderModule = __decorate([
    common_1.Module({
        imports: [
            mailer_1.MailerModule.forRoot(email_sender_config_1.EMAIL_SENDER_CONFIG)
        ],
        controllers: [
            email_sender_controller_1.EmailSenderController
        ],
        providers: [
            email_sender_service_1.EmailSenderService,
        ],
        exports: [
            mailer_1.MailerModule,
            email_sender_service_1.EmailSenderService
        ]
    })
], EmailSenderModule);
exports.EmailSenderModule = EmailSenderModule;
//# sourceMappingURL=email-sender.module.js.map