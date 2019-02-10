import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { localStorageConfig } from '../shared/constants/constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userToken: string = localStorage.getItem(localStorageConfig);
        if (userToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: userToken
                }
            });
        }

        return next.handle(request);
    }
}
