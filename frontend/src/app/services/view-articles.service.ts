import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_BACKEND_PATH } from 'src/app/common/const/base-backend-path.const';
import { BaseService } from './base.service';

@Injectable()
export class ViewArticlesService extends BaseService {
    constructor(http: HttpClient) {
        super(BASE_BACKEND_PATH + 'view-articles', http);
    }
}
