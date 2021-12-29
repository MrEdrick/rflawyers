"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeItemsModule = void 0;
const common_1 = require("@nestjs/common");
const resume_items_controller_1 = require("./resume-items.controller");
const resume_items_service_1 = require("./resume-items.service");
const resume_item_repository_1 = require("./resume-item.repository");
const user_auth_module_1 = require("../../user-auth/user-auth.module");
const typeorm_1 = require("@nestjs/typeorm");
let ResumeItemsModule = class ResumeItemsModule {
};
ResumeItemsModule = __decorate([
    common_1.Module({
        imports: [
            user_auth_module_1.UserAuthModule,
            typeorm_1.TypeOrmModule.forFeature([resume_item_repository_1.ResumeItemRepository])
        ],
        controllers: [resume_items_controller_1.ResumeItemsController],
        providers: [resume_items_service_1.ResumeItemsService]
    })
], ResumeItemsModule);
exports.ResumeItemsModule = ResumeItemsModule;
//# sourceMappingURL=resume-items.module.js.map