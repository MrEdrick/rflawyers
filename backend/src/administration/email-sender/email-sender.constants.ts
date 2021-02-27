import * as config from 'config'

export const EMAIL_SENDER = config.get('email-sender');

export const CONTACT_US_TEMPLATE = 'contact-us';
export const USER_EMAIL_CONFIRMATION_TEMPLATE = 'user-email-confirmation';
export const USER_RECOVER_PASSWORD_TEMPLATE = 'user-recover-password';
