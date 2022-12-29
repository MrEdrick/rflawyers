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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthService = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("../configurations/users/dto/create-user.dto");
const jwt_1 = require("@nestjs/jwt");
const filter_user_dto_1 = require("../configurations/users/dto/filter-user.dto");
const users_service_1 = require("../configurations/users/users.service");
let UserAuthService = class UserAuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signUp(authCredentialsDto) {
        const filterUserDto = new filter_user_dto_1.FilterUserDto();
        filterUserDto.email = authCredentialsDto.email;
        if ((await this.usersService.getByFilter(filterUserDto)).length > 0) {
            throw new common_1.NotAcceptableException('Invalid credentials');
        }
        const createUserDto = create_user_dto_1.CreateUserDto
            .fromAuthCredentialsDto(authCredentialsDto, (await this.usersService.count() === 0));
        return await this.usersService.create(createUserDto);
    }
    async signIn(authCredentialsDto) {
        const { email, password } = authCredentialsDto;
        const user = await this.usersService.validatePassword(email, password);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (user.confirmationToken) {
            throw new common_1.UnauthorizedException('E-mail not confirmed');
        }
        console.log(JSON.parse(JSON.stringify(user)));
        const payload = JSON.parse(JSON.stringify(user));
        console.log(payload);
        const accessToken = await this.jwtService.sign(payload);
        console.log(accessToken);
        return { accessToken };
    }
    async emailConfirmation(authEmailConfirmationDto) {
        const filterUserDto = new filter_user_dto_1.FilterUserDto();
        filterUserDto.confirmationToken = authEmailConfirmationDto.confirmationToken;
        const user = (await this.usersService.getByFilter(filterUserDto))[0];
        let confirmed = false;
        if (user === null || user === void 0 ? void 0 : user.confirmationToken) {
            user.confirmationToken = null;
            await user.save();
            confirmed = (!user.confirmationToken);
        }
        return confirmed;
    }
    async resetPassword(authResetPasswordDto) {
        const filterUserDto = new filter_user_dto_1.FilterUserDto();
        filterUserDto.recoverToken = authResetPasswordDto.recoverToken;
        let user = (await this.usersService.getByFilter(filterUserDto))[0];
        let reseted = false;
        if (user === null || user === void 0 ? void 0 : user.recoverToken) {
            user =
                await this.usersService.updatePassword(user, { id: user.id, password: authResetPasswordDto.password });
            reseted = (!user.recoverToken);
        }
        return reseted;
    }
    async recoverPassword(email) {
        return await this.usersService.repositoryRecoverPassword(email);
    }
};
UserAuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], UserAuthService);
exports.UserAuthService = UserAuthService;
//# sourceMappingURL=user-auth.service.js.map