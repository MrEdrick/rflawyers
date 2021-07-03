import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_BACKEND_PATH } from 'src/app/common/const/base-backend-path.const';
import { BaseService } from '../../../services/base.service';

@Injectable()
export class ResumesService extends BaseService {
    constructor(http: HttpClient) {
        super(BASE_BACKEND_PATH + 'resumes', http);
    }
}
