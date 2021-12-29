import { User } from '../configurations/users/user.entity';
import { DeleteRecordDto } from './dto/delete-record.dto';
import { InsertNewRecordDto } from './dto/insert-new-record.dto';
import { SelectFilesNamesDto } from './dto/select-files-names.dto';
import { UploadFileDto } from './dto/upload-file.dto';
import { FileRepository } from './file.repository';
export declare class FilesService {
    private fileRepository;
    constructor(fileRepository: FileRepository);
    updateRecordWithFilePath(filePathFolder: string, fileName: string, uploadFileDto: UploadFileDto): Promise<string>;
    insertNewRecordOfTableDetail(insertNewRecordDto: InsertNewRecordDto, user: User): Promise<any>;
    selectFilesNames(selectFilesNamesDto: SelectFilesNamesDto): Promise<string[]>;
    deleteRecord(deleteRecordDto: DeleteRecordDto): Promise<any>;
    clearRecordsWithFileNameEmpty(selectFilesNamesDto: SelectFilesNamesDto): Promise<string[]>;
}
