"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawyersModule = void 0;
const common_1 = require("@nestjs/common");
const lawyers_controller_1 = require("./lawyers.controller");
const lawyers_service_1 = require("./lawyers.service");
const lawyer_repository_1 = require("./lawyer.repository");
const user_auth_module_1 = require("../../user-auth/user-auth.module");
const typeorm_1 = require("@nestjs/typeorm");
let LawyersModule = class LawyersModule {
};
LawyersModule = __decorate([
    common_1.Module({
        imports: [
            user_auth_module_1.UserAuthModule,
            typeorm_1.TypeOrmModule.forFeature([lawyer_repository_1.LawyerRepository])
        ],
        controllers: [lawyers_controller_1.LawyersController],
        providers: [lawyers_service_1.LawyersService]
    })
], LawyersModule);
exports.LawyersModule = LawyersModule;
//# sourceMappingURL=lawyers.module.js.map