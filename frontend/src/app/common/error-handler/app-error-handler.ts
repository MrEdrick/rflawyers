import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandler extends ErrorHandler {
    handlerError(error) {
        console.log(error);
    }
}
