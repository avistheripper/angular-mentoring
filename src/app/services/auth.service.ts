import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel, UserResponse } from '../core/models/user';
import { localStorageConfig, API_URL } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public userLogin(user: UserModel): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${API_URL}/auth/login`, user);
  }

  public userLogout(): void {
    localStorage.removeItem(localStorageConfig);
  }

  public getUserInfo<T>(): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${API_URL}/auth/userinfo`, {});
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem(localStorageConfig);
  }
}
