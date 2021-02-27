import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../services/base.service';
import { BASE_BACKEND_PATH_ADM } from '../../../common/const/base-backend-path.const';

@Injectable()
export class UsersService extends BaseService {
    constructor(http: HttpClient) {
        super(BASE_BACKEND_PATH_ADM + 'users', http);
    }
}
