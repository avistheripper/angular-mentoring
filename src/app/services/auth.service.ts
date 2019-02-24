import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { UserModel, UserResponse } from '../core/models/user';
import { localStorageConfig, API_URL } from '../shared/constants/constants';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http: HttpClient;
  private router: Router;
  public userInfo: Subject<UserResponse> = new Subject<UserResponse>();
  public isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;

  }

  public userLogin(user: UserModel): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${API_URL}/auth/login`, user).pipe(
      tap(res => {
      localStorage.setItem('userToken', res.token);
      this.router.navigate(['/about']);
      this.isAuth.next(true);
      }));
  }

  public userLogout(): void {
    localStorage.removeItem(localStorageConfig);
    this.isAuth.next(false);
  }

  public userInfoRequest(): void {
    this.http.post<UserResponse>(`${API_URL}/auth/userinfo`, {})
      .subscribe((res: UserResponse) => this.userInfo.next(res));
  }

  public getUserInfo(): Observable<UserResponse> {
    this.userInfoRequest();
    return this.userInfo;
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem(localStorageConfig);
  }

  public getUserStatus(): Observable<boolean> {
    return this.isAuth;
  }
}
