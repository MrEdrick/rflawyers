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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_repository_1 = require("./user.repository");
const email_sender_service_1 = require("../../email-sender/email-sender.service");
let UsersService = class UsersService {
    constructor(repository, emailSenderService) {
        this.repository = repository;
        this.emailSenderService = emailSenderService;
    }
    getByFilter(filterDto) {
        return this.repository.repositoryGetByFilter(filterDto);
    }
    async getById(id) {
        const found = await this.repository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`Record with ID "${id}" not found`);
        }
        return found;
    }
    create(createDto) {
        return this.repository.repositoryCreate(createDto, this.emailSenderService);
    }
    async delete(id) {
        const result = await this.repository.delete(id);
        if (result.affected == 0) {
            throw new common_1.NotFoundException(`Record with ID "${id}" not found`);
        }
        return;
    }
    update(updateDto) {
        return this.repository.repositoryUpdate(updateDto);
    }
    updatePassword(user, updateUserPasswordDto) {
        return this.repository.repositoryUpdatePassword(user, updateUserPasswordDto);
    }
    validatePassword(email, password) {
        return this.repository.validatePassword(email, password);
    }
    repositoryRecoverPassword(email) {
        return this.repository.repositoryRecoverPassword(email, this.emailSenderService);
    }
    count() {
        return this.repository.count();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        email_sender_service_1.EmailSenderService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map