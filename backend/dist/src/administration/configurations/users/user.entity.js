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
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const lawyer_entity_1 = require("../../lawyers-registrations/lawyers/lawyer.entity");
const resume_entity_1 = require("../../lawyers-registrations/resumes/resume.entity");
const resume_item_entity_1 = require("../../lawyers-registrations/resume-items/resume-item.entity");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { v4: uuidv4 } = require('uuid');
let User = User_1 = class User extends typeorm_1.BaseEntity {
    async validatePassword(password) {
        return this.password === (await bcrypt.hash(password, this.salt));
    }
    static async fromCreateDto(props) {
        let user = new User_1;
        Object.assign(user, props);
        user.id = uuidv4();
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(user.password, user.salt);
        user.confirmationToken = crypto.randomBytes(32).toString('hex');
        user.insertionDateTime = new Date();
        return user;
    }
    static fromUpdateUserDto(props) {
        let user = new User_1;
        Object.assign(user, props);
        return user;
    }
    static async fromUpdateUserPasswordDto(user, password) {
        user.recoverToken = null;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        return user;
    }
    static async hashPassword(password, salt) {
        return await bcrypt.hash(password, salt);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "salt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "confirmationToken", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "recoverToken", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "image", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Boolean)
], User.prototype, "isDefault", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], User.prototype, "isAdministrator", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], User.prototype, "insertionDateTime", void 0);
__decorate([
    typeorm_1.OneToMany(type => lawyer_entity_1.Lawyer, lawyer => lawyer.user, { eager: false }),
    __metadata("design:type", Array)
], User.prototype, "lawyers", void 0);
__decorate([
    typeorm_1.OneToMany(type => resume_entity_1.Resume, resume => resume.user, { eager: false }),
    __metadata("design:type", Array)
], User.prototype, "resumes", void 0);
__decorate([
    typeorm_1.OneToMany(type => resume_item_entity_1.ResumeItem, resumeItem => resumeItem.user, { eager: false }),
    __metadata("design:type", Array)
], User.prototype, "resumeItems", void 0);
User = User_1 = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(['username', 'email'])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map