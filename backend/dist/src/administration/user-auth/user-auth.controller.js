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
exports.UserAuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_credentials_dto_1 = require("./dto/auth-credentials.dto");
const user_auth_service_1 = require("./user-auth.service");
const auth_email_confirmation_dto_1 = require("./dto/auth-email-confirmation.dto");
const auth_reset_password_dto_1 = require("./dto/auth-reset-password.dto");
let UserAuthController = class UserAuthController {
    constructor(service) {
        this.service = service;
    }
    signUp(authCredentialsDto) {
        return this.service.signUp(authCredentialsDto);
    }
    signIn(authCredentialsDto) {
        return this.service.signIn(authCredentialsDto);
    }
    emailConfirmation(authEmailConfirmationDto) {
        return this.service.emailConfirmation(authEmailConfirmationDto);
    }
    recoverPassword(recoverPassword) {
        return this.service.recoverPassword(recoverPassword.email);
    }
    resetPassword(authResetPasswordDto) {
        return this.service.resetPassword(authResetPasswordDto);
    }
};
__decorate([
    common_1.Post('singup'),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "signUp", null);
__decorate([
    common_1.Post('singin'),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "signIn", null);
__decorate([
    common_1.Post('email-confirmation'),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_email_confirmation_dto_1.AuthEmailConfirmationDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "emailConfirmation", null);
__decorate([
    common_1.Post('recover-password'),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "recoverPassword", null);
__decorate([
    common_1.Post('reset-password'),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_reset_password_dto_1.AuthResetPasswordDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "resetPassword", null);
UserAuthController = __decorate([
    common_1.Controller('user-auth'),
    __metadata("design:paramtypes", [user_auth_service_1.UserAuthService])
], UserAuthController);
exports.UserAuthController = UserAuthController;
//# sourceMappingURL=user-auth.controller.js.map