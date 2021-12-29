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
var CreateUserDto_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let CreateUserDto = CreateUserDto_1 = class CreateUserDto {
    static fromAuthCredentialsDto(props, isFirstUser) {
        const createUserDto = new CreateUserDto_1();
        Object.assign(createUserDto, props);
        createUserDto.active = true;
        createUserDto.isDefault = isFirstUser;
        createUserDto.isAdministrator = isFirstUser;
        return createUserDto;
    }
};
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "image", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "isDefault", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "active", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "isAdministrator", void 0);
CreateUserDto = CreateUserDto_1 = __decorate([
    class_transformer_1.Exclude()
], CreateUserDto);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map