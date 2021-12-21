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
exports.FilesController = exports.storageImage = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const user_decorator_1 = require("../configurations/users/user.decorator");
const user_entity_1 = require("../configurations/users/user.entity");
const upload_file_dto_1 = require("./dto/upload-file.dto");
const files_service_1 = require("./files.service");
const uuid_1 = require("uuid");
const insert_new_record_dto_1 = require("./dto/insert-new-record.dto");
const delete_record_dto_1 = require("./dto/delete-record.dto");
const select_files_names_dto_1 = require("./dto/select-files-names.dto");
const fs = require("fs");
const path = require("path");
const BASE_PATH_IMAGES = 'files/uploaded/images/';
exports.storageImage = {
    storage: multer_1.diskStorage({
        destination: (req, file, cb) => {
            const path = './' + BASE_PATH_IMAGES + req.body.tableName;
            fs.mkdirSync(path, { recursive: true });
            cb(null, path);
        },
        filename: (req, file, cb) => {
            cb(null, `${uuid_1.v4()}${path.parse(file.originalname).ext}`);
        }
    })
};
let FilesController = class FilesController {
    constructor(fileService) {
        this.fileService = fileService;
    }
    uplaodImage(file, uploadFileDto, user) {
        return this.fileService
            .updateRecordWithFilePath(BASE_PATH_IMAGES + uploadFileDto.tableName + '/', file.filename, uploadFileDto)
            .catch((error) => {
            fs.unlinkSync('./' + BASE_PATH_IMAGES + uploadFileDto.tableName + '/' + file.filename);
            if (uploadFileDto.deleteRecordIfFail = 'true') {
                const deleteRecordDto = new delete_record_dto_1.DeleteRecordDto();
                deleteRecordDto.columnName = 'id';
                deleteRecordDto.typeColumn = 'id';
                deleteRecordDto.columnValue = uploadFileDto.tableId;
                deleteRecordDto.tableName = uploadFileDto.tableName;
                this.fileService.deleteRecord(deleteRecordDto);
            }
            return error;
        });
    }
    selectFilesNames(selectFilesNamesDto) {
        return this.fileService.selectFilesNames(selectFilesNamesDto);
    }
    removeFile(deleteRecordDto) {
        fs.unlinkSync('./' + BASE_PATH_IMAGES + deleteRecordDto.tableName + '/' + deleteRecordDto.fileName);
        return this.fileService.deleteRecord(deleteRecordDto);
    }
    insertNewRecord(insertNewRecordDto, user) {
        return this.fileService.insertNewRecordOfTableDetail(insertNewRecordDto, user);
    }
    deleteRecord(deleteRecordDto, user) {
        return this.fileService.deleteRecord(deleteRecordDto);
    }
    clearRecordsWithFileNameEmpty(selectFilesNamesDto) {
        return this.fileService.clearRecordsWithFileNameEmpty(selectFilesNamesDto);
    }
    getUploadedImages(folder, image, res) {
        return res.sendFile(folder + '/' + image, { root: './' + BASE_PATH_IMAGES });
    }
};
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('user-jwt-strategy')),
    common_1.Post('upload-image'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', exports.storageImage)),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Body()), __param(2, user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, upload_file_dto_1.UploadFileDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uplaodImage", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('user-jwt-strategy')),
    common_1.Post('select-files-names'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [select_files_names_dto_1.SelectFilesNamesDto]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "selectFilesNames", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('user-jwt-strategy')),
    common_1.Post('remove-file'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_record_dto_1.DeleteRecordDto]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "removeFile", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('user-jwt-strategy')),
    common_1.Post('insert-new-record'),
    __param(0, common_1.Body()), __param(1, user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insert_new_record_dto_1.InsertNewRecordDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "insertNewRecord", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('user-jwt-strategy')),
    common_1.Post('delete-record'),
    __param(0, common_1.Body()), __param(1, user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_record_dto_1.DeleteRecordDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "deleteRecord", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard('user-jwt-strategy')),
    common_1.Post('clear-records-with-file-name-empty'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [select_files_names_dto_1.SelectFilesNamesDto]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "clearRecordsWithFileNameEmpty", null);
__decorate([
    common_1.Get('uploaded/images/:folder/:image'),
    __param(0, common_1.Param('folder')), __param(1, common_1.Param('image')), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getUploadedImages", null);
FilesController = __decorate([
    common_1.Controller('files'),
    __metadata("design:paramtypes", [files_service_1.FilesService])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map