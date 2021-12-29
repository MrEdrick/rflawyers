"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolingModule = void 0;
const common_1 = require("@nestjs/common");
const schooling_controller_1 = require("./schooling.controller");
const schooling_service_1 = require("./schooling.service");
const schooling_repository_1 = require("./schooling.repository");
const user_auth_module_1 = require("../../user-auth/user-auth.module");
const typeorm_1 = require("@nestjs/typeorm");
let SchoolingModule = class SchoolingModule {
};
SchoolingModule = __decorate([
    common_1.Module({
        imports: [
            user_auth_module_1.UserAuthModule,
            typeorm_1.TypeOrmModule.forFeature([schooling_repository_1.SchoolingRepository])
        ],
        controllers: [schooling_controller_1.SchoolingController],
        providers: [schooling_service_1.SchoolingService]
    })
], SchoolingModule);
exports.SchoolingModule = SchoolingModule;
//# sourceMappingURL=schooling.module.js.map