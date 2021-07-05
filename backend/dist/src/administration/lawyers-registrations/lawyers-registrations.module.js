"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawyersRegistrationsModule = void 0;
const common_1 = require("@nestjs/common");
const lawyers_module_1 = require("./lawyers/lawyers.module");
const resume_items_module_1 = require("./resume-items/resume-items.module");
const resumes_module_1 = require("./resumes/resumes.module");
let LawyersRegistrationsModule = class LawyersRegistrationsModule {
};
LawyersRegistrationsModule = __decorate([
    common_1.Module({
        imports: [
            resume_items_module_1.ResumeItemsModule,
            resumes_module_1.ResumesModule,
            lawyers_module_1.LawyersModule
        ],
        exports: [
            resume_items_module_1.ResumeItemsModule,
            resumes_module_1.ResumesModule,
            lawyers_module_1.LawyersModule
        ]
    })
], LawyersRegistrationsModule);
exports.LawyersRegistrationsModule = LawyersRegistrationsModule;
//# sourceMappingURL=lawyers-registrations.module.js.map