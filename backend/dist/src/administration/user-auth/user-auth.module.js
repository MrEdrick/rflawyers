"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthModule = void 0;
const common_1 = require("@nestjs/common");
const user_auth_controller_1 = require("./user-auth.controller");
const user_auth_service_1 = require("./user-auth.service");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const user_jwt_strategy_1 = require("./user-jwt-strategy");
const users_service_1 = require("../configurations/users/users.service");
const user_repository_1 = require("../configurations/users/user.repository");
const typeorm_1 = require("@nestjs/typeorm");
const email_sender_module_1 = require("../email-sender/email-sender.module");
const config = require("config");
const jwtConfig = config.get('jwt');
let UserAuthModule = class UserAuthModule {
};
UserAuthModule = __decorate([
    common_1.Module({
        imports: [
            email_sender_module_1.EmailSenderModule,
            typeorm_1.TypeOrmModule.forFeature([user_repository_1.UserRepository]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || jwtConfig.secret,
                signOptions: {
                    expiresIn: jwtConfig.expiresIn,
                }
            })
        ],
        controllers: [user_auth_controller_1.UserAuthController],
        providers: [
            user_jwt_strategy_1.UserJwtStrategy,
            users_service_1.UsersService,
            user_auth_service_1.UserAuthService,
        ],
        exports: [
            user_jwt_strategy_1.UserJwtStrategy,
            passport_1.PassportModule,
        ]
    })
], UserAuthModule);
exports.UserAuthModule = UserAuthModule;
//# sourceMappingURL=user-auth.module.js.map