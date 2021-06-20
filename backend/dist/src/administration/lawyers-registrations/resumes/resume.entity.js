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
var Resume_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resume = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../configurations/users/user.entity");
const lawyer_entity_1 = require("../lawyers/lawyer.entity");
const { v4: uuidv4 } = require('uuid');
let Resume = Resume_1 = class Resume extends typeorm_1.BaseEntity {
    static fromCreateDto(props, userId) {
        let resume = new Resume_1;
        Object.assign(Resume_1, props);
        resume.id = uuidv4();
        resume.insertionDateTime = new Date();
        resume.userId = userId;
        return resume;
    }
    static fromUpdateResumeDto(props) {
        let resume = new Resume_1;
        Object.assign(resume, props);
        return resume;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Resume.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], Resume.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], Resume.prototype, "lawyerId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Resume.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Resume.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Resume.prototype, "active", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Resume.prototype, "insertionDateTime", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.resumes, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], Resume.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => lawyer_entity_1.Lawyer, lawyer => lawyer.resumes, { eager: true }),
    __metadata("design:type", lawyer_entity_1.Lawyer)
], Resume.prototype, "lawyer", void 0);
Resume = Resume_1 = __decorate([
    typeorm_1.Entity()
], Resume);
exports.Resume = Resume;
//# sourceMappingURL=resume.entity.js.map