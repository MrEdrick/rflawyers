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
var ResumeItem_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeItem = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../configurations/users/user.entity");
const resume_entity_1 = require("../resumes/resume.entity");
const { v4: uuidv4 } = require('uuid');
let ResumeItem = ResumeItem_1 = class ResumeItem extends typeorm_1.BaseEntity {
    static fromCreateDto(props, userId) {
        let resumeItem = new ResumeItem_1;
        Object.assign(resumeItem, props);
        resumeItem.id = uuidv4();
        resumeItem.insertionDateTime = new Date();
        resumeItem.userId = userId;
        return resumeItem;
    }
    static fromUpdateResumeItemDto(props) {
        let resumeItem = new ResumeItem_1;
        Object.assign(resumeItem, props);
        return resumeItem;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], ResumeItem.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], ResumeItem.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], ResumeItem.prototype, "resumeId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ResumeItem.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ResumeItem.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], ResumeItem.prototype, "active", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], ResumeItem.prototype, "insertionDateTime", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.resumeItems, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], ResumeItem.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => resume_entity_1.Resume, resume => resume.resumeItems, { eager: true }),
    __metadata("design:type", resume_entity_1.Resume)
], ResumeItem.prototype, "resume", void 0);
ResumeItem = ResumeItem_1 = __decorate([
    typeorm_1.Entity()
], ResumeItem);
exports.ResumeItem = ResumeItem;
//# sourceMappingURL=resume-item.entity.js.map