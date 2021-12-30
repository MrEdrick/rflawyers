import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BadInput } from '../common/error-handler/bad-input';
import { NotFoundError } from '../common/error-handler/not-found-error';
import { AppError } from '../common/error-handler/app-error';
import { ParamDto } from '../dto/param.dto';
import { DialogService } from '../shared-features/dialog-presenter/service/dialog.service';
import { GENERIC_DELETE_ERROR_MESSAGE } from '../common/const/error-messages.const';
import { InjectorService } from './injector.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

export class BaseService {
  private dialogService: DialogService;
  private headers!: HttpHeaders;

  constructor(
    private url: string,
    private http: HttpClient) {

    this.dialogService = InjectorService.injector.get(DialogService);
    this.headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS')
      .set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  }

  getById(id: any): Observable<any> {
    return this.http.get(this.url + '/' + id, { headers: this.headers })
      .pipe(
        map(
          (response: any) => response,

        ),
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  getAll(): Observable<any> {
    return this.http.get(this.url, { headers: this.headers })
      .pipe(
        map(
          (response: any) => response,

        ),
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  getWithFilter(paramsDto: ParamDto[]): Observable<any> {
    let httpParams = new HttpParams();

    paramsDto.forEach((paramDto) => {
      httpParams = httpParams.append(paramDto.key, paramDto.value);
    });

    return this.http.get(this.url, { headers: this.headers, params: httpParams })
      .pipe(
        map(
          (response: any) => response,

        ),
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  create(resource: any): Observable<any> {
    return this.http.post(this.url, resource, { headers: this.headers })
      .pipe(
        map(
          (response: any) => response,
        ),
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  update(resource: any): Observable<any> {
    return this.http.patch(this.url, resource, { headers: this.headers })
      .pipe(
        map(
          (response: any) => response,
        ),
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  delete(id: any): Observable<any> {
    return this.http.delete(this.url + '/' + id, { headers: this.headers })
      .pipe(
        map(
          (response: any) => response,
        ),
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  get(path: any): Observable<any> {
    return this.http.get(this.url + '/' + path, { headers: this.headers })
      .pipe(
        map(
          (response: any) => response,
        ),
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  post(path: any, resource: any, options?: any): Observable<any> {
    return this.http.post(this.url + '/' + path, resource, { headers: this.headers })
      .pipe(
        map(
          (response: any) => {
            if (response) {
              return response;
            } else {
              return this.handleError(response);
            }
          }
        ),
        catchError((error) => {
          return this.handleError(error);
        })
      );
  }

  private async handleError(response: any) {
    if (response?.error?.method === 'DELETE') {
      this.dialogService.showAlert(GENERIC_DELETE_ERROR_MESSAGE);
    }

    if (response.status === 400) {
      return throwError(new BadInput(response));
    }

    if (response.status === 404) {
      return throwError(new NotFoundError());
    }

    return throwError(new AppError(response));
  }
}


