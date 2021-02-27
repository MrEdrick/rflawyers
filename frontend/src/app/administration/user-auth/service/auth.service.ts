import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { BaseService } from '../../../services/base.service';
import { BASE_BACKEND_PATH } from 'src/app/common/const/base-backend-path.const';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService extends BaseService {
    private readonly ACCESS_TOKEN = 'access_token';

    constructor(http: HttpClient, private jwtHelperService: JwtHelperService) {
        super(BASE_BACKEND_PATH + 'user-auth', http);
    }

    public singin(value: any): Observable<any> {
        return super.post('singin', value).pipe(map((response) => {
            return response;
        }));
    }

    public singup(value: any): Observable<any> {
        return super.post('singup', value).pipe(map((response) => {
            return response;
        }));
    }

    public emailConfirmation(value: any): Observable<any> {
        return super.post('email-confirmation', value).pipe(map((response) => {
            return response;
        }));
    }

    public recoverPassword(value: any): Observable<any> {
        return super.post('recover-password', value).pipe(map((response) => {
            return response;
        }));
    }

    public resetPassword(value: any): Observable<any> {
        return super.post('reset-password', value).pipe(map((response) => {
            return response;
        }));
    }

    public logout() {
        localStorage.removeItem(this.ACCESS_TOKEN);
    }

    public getAccessToken() {
        return localStorage.getItem(this.ACCESS_TOKEN);
    }

    public isLoggedIn(): boolean {
        const accessToken = this.getAccessToken();

        if (!accessToken) {
            return false;
        }

        return Date.now() <= (this.jwtHelperService.decodeToken(accessToken).exp * 1000);
    }

    public getCurrentUser(): any {
        const accessToken = this.getAccessToken();

        if (!accessToken) {
            return null;
        }

        return this.jwtHelperService.decodeToken(accessToken);
    }
}
