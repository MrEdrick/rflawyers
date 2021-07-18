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
var Lawyer_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lawyer = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../configurations/users/user.entity");
const resume_entity_1 = require("../resumes/resume.entity");
const { v4: uuidv4 } = require('uuid');
let Lawyer = Lawyer_1 = class Lawyer extends typeorm_1.BaseEntity {
    static fromCreateDto(props, userId) {
        let lawyer = new Lawyer_1;
        Object.assign(lawyer, props);
        lawyer.id = uuidv4();
        lawyer.insertionDateTime = new Date();
        lawyer.userId = userId;
        return lawyer;
    }
    static fromUpdateLawyerDto(props) {
        let lawyer = new Lawyer_1;
        Object.assign(lawyer, props);
        return lawyer;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Lawyer.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.Generated('uuid'),
    __metadata("design:type", String)
], Lawyer.prototype, "userId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Lawyer.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Lawyer.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Lawyer.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Lawyer.prototype, "specializations", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Lawyer.prototype, "languages", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Lawyer.prototype, "oab", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Lawyer.prototype, "image", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Lawyer.prototype, "active", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Lawyer.prototype, "insertionDateTime", void 0);
__decorate([
    typeorm_1.OneToMany(type => resume_entity_1.Resume, resume => resume.user, { eager: false }),
    __metadata("design:type", Array)
], Lawyer.prototype, "resumes", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.lawyers, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], Lawyer.prototype, "user", void 0);
Lawyer = Lawyer_1 = __decorate([
    typeorm_1.Entity()
], Lawyer);
exports.Lawyer = Lawyer;
//# sourceMappingURL=lawyer.entity.js.map