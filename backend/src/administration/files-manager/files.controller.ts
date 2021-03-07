import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { diskStorage } from 'multer';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetUser } from '../configurations/users/user.decorator';
import { User } from '../configurations/users/user.entity';
import { UploadFileDto } from './dto/upload-file.dto';
import { FilesService } from './files.service';
import { v4 as uuidv4 } from 'uuid';
import fs = require('fs')
import path = require('path');
import { InsertNewRecordDto } from './dto/insert-new-record.dto';
import { DeleteRecordDto } from './dto/delete-record.dto';
import { SelectFilesNamesDto } from './dto/select-files-names.dto';

const BASE_PATH_IMAGES = 'files/uploaded/images/';

export const storageImage = {
    storage: diskStorage({
        destination: (req, file, cb) => {
            const path = './' + BASE_PATH_IMAGES + req.body.tableName;
            console.log(path);
            fs.mkdirSync(path, { recursive: true });
            cb(null, path);
        },
        filename: (req, file, cb) => {
            cb(null, `${uuidv4()}${path.parse(file.originalname).ext}`);
        }
    })
}

@Controller('files')
export class FilesController {
    constructor(private fileService: FilesService) { }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post('upload-image')
    @UseInterceptors(FileInterceptor('file', storageImage))
    uplaodImage(@UploadedFile() file, @Body() uploadFileDto: UploadFileDto, @GetUser() user: User): Promise<string> {
        return this.fileService
            .updateRecordWithFilePath(
                BASE_PATH_IMAGES + uploadFileDto.tableName + '/', file.filename, uploadFileDto)
            .catch((error) => {
                console.log(error);

                fs.unlinkSync('./' + BASE_PATH_IMAGES + uploadFileDto.tableName + '/' + file.filename);

                if (uploadFileDto.deleteRecordIfFail = 'true') {
                    const deleteRecordDto = new DeleteRecordDto();
                    deleteRecordDto.columnName = 'id';
                    deleteRecordDto.typeColumn = 'id';
                    deleteRecordDto.columnValue = uploadFileDto.tableId;
                    deleteRecordDto.tableName = uploadFileDto.tableName;

                    this.fileService.deleteRecord(deleteRecordDto);
                }

                return error;
            });
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post('select-files-names')
    selectFilesNames(@Body() selectFilesNamesDto: SelectFilesNamesDto): Promise<string[]> {
        return this.fileService.selectFilesNames(selectFilesNamesDto);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post('remove-file')
    removeFile(@Body() deleteRecordDto: DeleteRecordDto): Promise<any> {
        fs.unlinkSync('./' + BASE_PATH_IMAGES + deleteRecordDto.tableName + '/' + deleteRecordDto.fileName);

        return this.fileService.deleteRecord(deleteRecordDto);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post('insert-new-record')
    insertNewRecord(@Body() insertNewRecordDto: InsertNewRecordDto, @GetUser() user: User): Promise<any> {
        return this.fileService.insertNewRecordOfTableDetail(insertNewRecordDto, user);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post('delete-record')
    deleteRecord(@Body() deleteRecordDto: DeleteRecordDto, @GetUser() user: User): Promise<any> {
        return this.fileService.deleteRecord(deleteRecordDto);
    }

    @UseGuards(AuthGuard('user-jwt-strategy'))
    @Post('clear-records-with-file-name-empty')
    clearRecordsWithFileNameEmpty(@Body() selectFilesNamesDto: SelectFilesNamesDto): Promise<string[]> {
        return this.fileService.clearRecordsWithFileNameEmpty(selectFilesNamesDto);
    }

    @Get('uploaded/images/:folder/:image')
    getUploadedImages(@Param('folder') folder: string, @Param('image') image: string, @Res() res): Promise<any> {
        return res.sendFile(folder + '/' + image, { root: './' + BASE_PATH_IMAGES });
    }

}
