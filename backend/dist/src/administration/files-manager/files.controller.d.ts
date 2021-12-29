import { User } from '../configurations/users/user.entity';
import { UploadFileDto } from './dto/upload-file.dto';
import { FilesService } from './files.service';
import { InsertNewRecordDto } from './dto/insert-new-record.dto';
import { DeleteRecordDto } from './dto/delete-record.dto';
import { SelectFilesNamesDto } from './dto/select-files-names.dto';
export declare const storageImage: {
    storage: any;
};
export declare class FilesController {
    private fileService;
    constructor(fileService: FilesService);
    uplaodImage(file: any, uploadFileDto: UploadFileDto, user: User): Promise<string>;
    selectFilesNames(selectFilesNamesDto: SelectFilesNamesDto): Promise<string[]>;
    removeFile(deleteRecordDto: DeleteRecordDto): Promise<any>;
    insertNewRecord(insertNewRecordDto: InsertNewRecordDto, user: User): Promise<any>;
    deleteRecord(deleteRecordDto: DeleteRecordDto, user: User): Promise<any>;
    clearRecordsWithFileNameEmpty(selectFilesNamesDto: SelectFilesNamesDto): Promise<string[]>;
    getUploadedImages(folder: string, image: string, res: any): Promise<any>;
}
