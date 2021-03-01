import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../../../services/base.service';
import { BASE_BACKEND_PATH } from '../../../common/const/base-backend-path.const';

@Injectable()
export class FilesService extends BaseService {
    constructor(http: HttpClient) {
        super(BASE_BACKEND_PATH + 'files', http);
    }

    public selectFilesPaths(datas: {}): Observable<any> {
        return super.post('select-files-names', datas);
    }

    public removeFile(datas: {}): Observable<any> {
        return super.post('remove-file', datas);
    }

    public uploadImage(formData: FormData): Observable<any> {
        return super.post('upload-image', formData, {
            reportProgress: true,
            observe: 'events'
        });
    }

    public insertNewRecord(datas: {}): Observable<any> {
        return super.post('insert-new-record', datas);
    }

    public delteRecord(datas: {}): Observable<any> {
        return super.post('delete-record', datas);
    }

    public clearRecordsWithFileNameEmpty(datas: {}): Observable<any> {
        return super.post('clear-records-with-file-name-empty', datas);
    }
}
