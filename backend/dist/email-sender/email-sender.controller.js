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
exports.EmailSenderController = void 0;
const common_1 = require("@nestjs/common");
const contact_us_dto_1 = require("./dto/contact-us.dto");
const email_sender_service_1 = require("./email-sender.service");
let EmailSenderController = class EmailSenderController {
    constructor(service) {
        this.service = service;
    }
    create(contactUsDto) {
        return this.service.contactUs(contactUsDto);
    }
};
__decorate([
    common_1.Post('contact-us'),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_us_dto_1.ContactUsDto]),
    __metadata("design:returntype", Promise)
], EmailSenderController.prototype, "create", null);
EmailSenderController = __decorate([
    common_1.Controller('email-sender'),
    __metadata("design:paramtypes", [email_sender_service_1.EmailSenderService])
], EmailSenderController);
exports.EmailSenderController = EmailSenderController;
//# sourceMappingURL=email-sender.controller.js.map