import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_BACKEND_PATH_ADM } from 'src/app/common/const/base-backend-path.const';
import { BaseService } from 'src/app/services/base.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EmailSenderService extends BaseService {
    constructor(http: HttpClient) {
        super(BASE_BACKEND_PATH_ADM, http);
    }

    public contactUs(value: any): Observable<any> {
        return super.post('email-confirmation', value)
            .pipe(map((response) => {
                return response;
            }));
    }
}
