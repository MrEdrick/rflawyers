"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const config = require("config");
const { v4: uuidv4 } = require('uuid');
const DATA_BASE_SCHEMA = 'public';
let FileRepository = class FileRepository {
    async updateRecordWithFilePath(filePathFolder, fileName, uploadFileDto) {
        const serverConfig = config.get('server');
        const filePath = serverConfig.domain + '/' + filePathFolder + fileName;
        const { tableName, columnName, tableId } = uploadFileDto;
        const response = await typeorm_1.getConnection().query(`update ${DATA_BASE_SCHEMA}.${tableName}
            set ${columnName} = '${filePath}'
            where id = '${tableId}'::uuid`);
        return filePath;
    }
    async selectFilesNames(selectFilesNamesDto) {
        const { columnFilePathName, tableName, columnIdName, columnIdValue } = selectFilesNamesDto;
        const response = await typeorm_1.getConnection().query(`select "${columnFilePathName}" from ${DATA_BASE_SCHEMA}.${tableName} 
            where "${columnIdName}" = '${columnIdValue}'::uuid`);
        return response;
    }
    async insertNewRecordOfTableDetail(insertNewRecordDto, user) {
        const id = uuidv4();
        const { tableName, masterTableId, masterColumnName } = insertNewRecordDto;
        const response = await typeorm_1.getConnection().query(`insert into ${DATA_BASE_SCHEMA}.${tableName} 
            ("id", "${masterColumnName}", "active", "userId", "insertionDateTime") 
            VALUES 
            ('${id}'::uuid, '${masterTableId}'::uuid, true, '${user.id}'::uuid, now())`);
        return response[0] || { id };
    }
    async deleteRecord(deleteRecordDto) {
        const { tableName, columnName, columnValue, typeColumn } = deleteRecordDto;
        let cast = '';
        if (typeColumn === 'id') {
            cast = '::uuid';
        }
        const response = await typeorm_1.getConnection().query(`delete from ${DATA_BASE_SCHEMA}.${tableName}
            where "${columnName}" = '${columnValue}'${cast}`);
        return response;
    }
    async clearRecordsWithFileNameEmpty(selectFilesNamesDto) {
        const { columnFilePathName, tableName, columnIdName, columnIdValue } = selectFilesNamesDto;
        const response = await typeorm_1.getConnection().query(`delete from ${DATA_BASE_SCHEMA}.${tableName} 
            where ("${columnIdName}" = '${columnIdValue}'::uuid)
            and (("${columnFilePathName}" is null) or ("${columnFilePathName}" = ''''))`);
        return response;
    }
};
FileRepository = __decorate([
    common_1.Injectable()
], FileRepository);
exports.FileRepository = FileRepository;
//# sourceMappingURL=file.repository.js.map