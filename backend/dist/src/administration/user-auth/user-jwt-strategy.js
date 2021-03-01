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
exports.UserJwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const common_1 = require("@nestjs/common");
const users_service_1 = require("../configurations/users/users.service");
const filter_user_dto_1 = require("../configurations/users/dto/filter-user.dto");
const config = require("config");
const jwtConfig = config.get('jwt');
let UserJwtStrategy = class UserJwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, 'user-jwt-strategy') {
    constructor(usersService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET || jwtConfig.secret
        });
        this.usersService = usersService;
    }
    async validate(payload) {
        const { email } = payload;
        const filterUserDto = new filter_user_dto_1.FilterUserDto();
        filterUserDto.email = email;
        var user = (await this.usersService.getByFilter(filterUserDto))[0];
        if ((!user) || (user === null || user === void 0 ? void 0 : user.confirmationToken) || ((!(user === null || user === void 0 ? void 0 : user.active)))) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
UserJwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UserJwtStrategy);
exports.UserJwtStrategy = UserJwtStrategy;
//# sourceMappingURL=user-jwt-strategy.js.map