import * as config from 'config'

export const EMAIL_SENDER = config.get('email-sender');

export const USER_EMAIL_CONFIRMATION_TEMPLATE = 'user-email-confirmation';
export const USER_RECOVER_PASSWORD_TEMPLATE = 'user-recover-password';

export const PERSON_EMAIL_CONFIRMATION_TEMPLATE = 'person-email-confirmation';
export const PERSON_RECOVER_PASSWORD_TEMPLATE = 'person-recover-password';
