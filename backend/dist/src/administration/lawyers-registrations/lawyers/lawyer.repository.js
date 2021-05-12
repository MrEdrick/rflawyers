"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawyerRepository = void 0;
const typeorm_1 = require("typeorm");
const lawyer_entity_1 = require("./lawyer.entity");
const enum_errorcodes_1 = require("../../../enums/enum-errorcodes");
const common_1 = require("@nestjs/common");
const handlebars_1 = require("handlebars");
let LawyerRepository = class LawyerRepository extends typeorm_1.Repository {
    async repositoryCreate(createDto, user) {
        const datas = lawyer_entity_1.Lawyer.fromCreateDto(createDto, user.id);
        try {
            await this.save(datas);
        }
        catch (error) {
            if (error.code == enum_errorcodes_1.EnumErrorCodes.DUPLICATED_DATA) {
                throw new common_1.ConflictException('Some data is duplicated');
            }
            else {
                console.log(error);
                throw new handlebars_1.Exception(error);
            }
        }
        return datas;
    }
    async repositoryUpdate(updateDto) {
        const datas = lawyer_entity_1.Lawyer.fromUpdateLawyerDto(updateDto);
        try {
            await this.save(Object.assign(Object.assign({}, datas), { id: datas.id }));
        }
        catch (error) {
            if (error.code == enum_errorcodes_1.EnumErrorCodes.DUPLICATED_DATA) {
                throw new common_1.ConflictException('Some data is duplicated');
            }
        }
        return datas;
    }
    async repositoryGetByFilter(filterDto) {
        const query = this.createQueryBuilder(this.metadata.tableName);
        const { userId, firstName, lastName, description, oab, active } = filterDto;
        if (filterDto.userId) {
            query.andWhere(`"userId" = ${userId}`);
        }
        if (filterDto.firstName) {
            query.andWhere(`"firstName" ILIKE '%${firstName}%'`);
        }
        if (filterDto.lastName) {
            query.andWhere(`"lastName" ILIKE '%${lastName}%'`);
        }
        if (filterDto.description) {
            query.andWhere(`"description" ILIKE '%${description}%'`);
        }
        if (filterDto.description) {
            query.andWhere(`"oab" = ${oab}`);
        }
        if (filterDto.active) {
            query.andWhere(`"active" = ${active}`);
        }
        return query.getParameters() ? query.getMany() : [];
    }
};
LawyerRepository = __decorate([
    typeorm_1.EntityRepository(lawyer_entity_1.Lawyer)
], LawyerRepository);
exports.LawyerRepository = LawyerRepository;
//# sourceMappingURL=lawyer.repository.js.map