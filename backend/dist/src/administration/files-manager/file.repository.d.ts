import { UploadFileDto } from "./dto/upload-file.dto";
import { InsertNewRecordDto } from "./dto/insert-new-record.dto";
import { DeleteRecordDto } from "./dto/delete-record.dto";
import { User } from "../configurations/users/user.entity";
import { SelectFilesNamesDto } from "./dto/select-files-names.dto";
export declare class FileRepository {
    updateRecordWithFilePath(filePathFolder: string, fileName: string, uploadFileDto: UploadFileDto): Promise<string>;
    selectFilesNames(selectFilesNamesDto: SelectFilesNamesDto): Promise<string[]>;
    insertNewRecordOfTableDetail(insertNewRecordDto: InsertNewRecordDto, user: User): Promise<any>;
    deleteRecord(deleteRecordDto: DeleteRecordDto): Promise<any>;
    clearRecordsWithFileNameEmpty(selectFilesNamesDto: SelectFilesNamesDto): Promise<string[]>;
}
