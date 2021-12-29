"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMAIL_SENDER_CONFIG = void 0;
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const email_sender_constants_1 = require("./email-sender.constants");
const path = require("path");
exports.EMAIL_SENDER_CONFIG = {
    template: {
        dir: path.resolve(__dirname, '..', '..', 'templates'),
        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
        options: {
            extName: '.hbs',
            strict: false,
            layoutsDir: path.resolve(__dirname, '..', '..', 'templates'),
        },
    },
    transport: {
        host: email_sender_constants_1.EMAIL_SENDER.host,
        port: email_sender_constants_1.EMAIL_SENDER.port,
        secure: email_sender_constants_1.EMAIL_SENDER.secure,
        tls: { ciphers: 'SSLv3', },
        auth: {
            user: email_sender_constants_1.EMAIL_SENDER.user,
            pass: email_sender_constants_1.EMAIL_SENDER.pass,
        },
    },
};
//# sourceMappingURL=email-sender.config.js.map