import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    private authService: AuthService;
    constructor(
        authService: AuthService,
        ) {
        this.authService = authService;
    }
    public canActivate(): Observable<boolean> {
       return this.authService.getUserStatus();
    }
}
