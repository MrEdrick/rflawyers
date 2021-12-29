"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrationModule = void 0;
const common_1 = require("@nestjs/common");
const user_auth_module_1 = require("./user-auth/user-auth.module");
const files_module_1 = require("./files-manager/files.module");
const email_sender_module_1 = require("./email-sender/email-sender.module");
const configurations_module_1 = require("./configurations/configurations.module");
const lawyers_registrations_module_1 = require("./lawyers-registrations/lawyers-registrations.module");
const blog_module_1 = require("./blog/blog.module");
let AdministrationModule = class AdministrationModule {
};
AdministrationModule = __decorate([
    common_1.Module({
        imports: [
            files_module_1.FilesModule,
            email_sender_module_1.EmailSenderModule,
            user_auth_module_1.UserAuthModule,
            configurations_module_1.ConfigurationsModule,
            lawyers_registrations_module_1.LawyersRegistrationsModule,
            blog_module_1.BlogModule
        ],
    })
], AdministrationModule);
exports.AdministrationModule = AdministrationModule;
//# sourceMappingURL=administration.module.js.map