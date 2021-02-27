import { getConnection } from "typeorm";
import { UploadFileDto } from "./dto/upload-file.dto";
import { Injectable } from "@nestjs/common";
import { InsertNewRecordDto } from "./dto/insert-new-record.dto";
import { DeleteRecordDto } from "./dto/delete-record.dto";
import { User } from "../configurations/users/user.entity";
import { SelectFilesNamesDto } from "./dto/select-files-names.dto";

const { v4: uuidv4 } = require('uuid');

const DATA_BASE_SCHEMA = 'public';

@Injectable()
export class FileRepository {
    async updateRecordWithFilePath(filePathFolder: string, fileName: string, uploadFileDto: UploadFileDto): Promise<string> {
        const filePath = 'http://localhost:3000/adm/' + filePathFolder + fileName;

        const { tableName, columnName, tableId } = uploadFileDto;

        const response = await getConnection().query(
            `update ${DATA_BASE_SCHEMA}.${tableName}
            set ${columnName} = '${filePath}'
            where id = '${tableId}'::uuid`);

        return filePath;
    }

    async selectFilesNames(selectFilesNamesDto: SelectFilesNamesDto): Promise<string[]> {
        const { columnFilePathName, tableName, columnIdName, columnIdValue } = selectFilesNamesDto;

        const response = await getConnection().query(
            `select "${columnFilePathName}" from ${DATA_BASE_SCHEMA}.${tableName} 
            where "${columnIdName}" = '${columnIdValue}'::uuid`);

        return response;
    }

    async insertNewRecordOfTableDetail(insertNewRecordDto: InsertNewRecordDto, user: User): Promise<any> {
        const id = uuidv4(); 
        const { tableName,  masterTableId, masterColumnName } = insertNewRecordDto;

        const response = await getConnection().query(
            `insert into ${DATA_BASE_SCHEMA}.${tableName} 
            ("id", "${masterColumnName}", "active", "userId", "insertionDateTime") 
            VALUES 
            ('${id}'::uuid, '${masterTableId}'::uuid, true, '${user.id}'::uuid, now())`);

        return response[0] || { id };
    }

    async deleteRecord(deleteRecordDto: DeleteRecordDto): Promise<any> {

        const { tableName, columnName, columnValue, typeColumn } = deleteRecordDto;
        
        let cast = '';

        if (typeColumn === 'id') {
            cast = '::uuid';
        }

        const response = await getConnection().query(
            `delete from ${DATA_BASE_SCHEMA}.${tableName}
            where "${columnName}" = '${columnValue}'${cast}`);

        return response;
    }

    async clearRecordsWithFileNameEmpty(selectFilesNamesDto: SelectFilesNamesDto): Promise<string[]> {
        const { columnFilePathName, tableName, columnIdName, columnIdValue } = selectFilesNamesDto;

        const response = await getConnection().query(
            `delete from ${DATA_BASE_SCHEMA}.${tableName} 
            where ("${columnIdName}" = '${columnIdValue}'::uuid)
            and (("${columnFilePathName}" is null) or ("${columnFilePathName}" = ''''))`);

        return response;
    }
}