import { Injectable } from '@nestjs/common';
import { User } from '../configurations/users/user.entity';
import { DeleteRecordDto } from './dto/delete-record.dto';
import { InsertNewRecordDto } from './dto/insert-new-record.dto';
import { SelectFilesNamesDto } from './dto/select-files-names.dto';
import { UploadFileDto } from './dto/upload-file.dto';
import { FileRepository } from './file.repository';

@Injectable()
export class FilesService {
    constructor(private fileRepository: FileRepository) { }

    updateRecordWithFilePath(filePathFolder: string, fileName: string, uploadFileDto: UploadFileDto): Promise<string> {
        return this.fileRepository.updateRecordWithFilePath(filePathFolder, fileName, uploadFileDto);
    }

    insertNewRecordOfTableDetail(insertNewRecordDto: InsertNewRecordDto, user: User): Promise<any> {
        return this.fileRepository.insertNewRecordOfTableDetail(insertNewRecordDto, user);
    }

    selectFilesNames(selectFilesNamesDto: SelectFilesNamesDto): Promise<string[]> {
        return this.fileRepository.selectFilesNames(selectFilesNamesDto);
    }

    deleteRecord(deleteRecordDto: DeleteRecordDto): Promise<any> {
        return this.fileRepository.deleteRecord(deleteRecordDto);
    }

    clearRecordsWithFileNameEmpty(selectFilesNamesDto: SelectFilesNamesDto): Promise<string[]> {
        return this.fileRepository.clearRecordsWithFileNameEmpty(selectFilesNamesDto);
    }
}
