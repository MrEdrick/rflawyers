"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_RECOVER_PASSWORD_TEMPLATE = exports.USER_EMAIL_CONFIRMATION_TEMPLATE = exports.CONTACT_US_TEMPLATE = exports.EMAIL_SENDER = void 0;
const config = require("config");
exports.EMAIL_SENDER = config.get('email-sender');
exports.CONTACT_US_TEMPLATE = 'contact-us';
exports.USER_EMAIL_CONFIRMATION_TEMPLATE = 'user-email-confirmation';
exports.USER_RECOVER_PASSWORD_TEMPLATE = 'user-recover-password';
//# sourceMappingURL=email-sender.constants.js.map