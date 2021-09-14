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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentsController = void 0;
const common_1 = require("@nestjs/common");
const contents_service_1 = require("./contents.service");
const user_entity_1 = require("../../configurations/users/user.entity");
const passport_1 = require("@nestjs/passport");
const user_decorator_1 = require("../../configurations/users/user.decorator");
const filter_content_dto_1 = require("./dto/filter-content.dto");
const create_content_dto_1 = require("./dto/create-content.dto");
const update_content_dto_1 = require("./dto/update-content.dto");
let ContentsController = class ContentsController {
    constructor(service) {
        this.service = service;
    }
    getByFilter(filterDto) {
        return this.service.getByFilter(filterDto);
    }
    getById(id) {
        return this.service.getById(id);
    }
    create(createDto, user) {
        return this.service.create(createDto, user);
    }
    delete(id) {
        return this.service.delete(id);
    }
    update(updateDto) {
        return this.service.update(updateDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_content_dto_1.FilterContentDto]),
    __metadata("design:returntype", Promise)
], ContentsController.prototype, "getByFilter", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContentsController.prototype, "getById", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('user-jwt-strategy')),
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __param(1, user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_content_dto_1.CreateContentDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], ContentsController.prototype, "create", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('user-jwt-strategy')),
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContentsController.prototype, "delete", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('user-jwt-strategy')),
    common_1.Patch(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_content_dto_1.UpdateContentDto]),
    __metadata("design:returntype", Promise)
], ContentsController.prototype, "update", null);
ContentsController = __decorate([
    common_1.Controller('contents'),
    __metadata("design:paramtypes", [contents_service_1.ContentsService])
], ContentsController);
exports.ContentsController = ContentsController;
//# sourceMappingURL=contents.controller.js.map