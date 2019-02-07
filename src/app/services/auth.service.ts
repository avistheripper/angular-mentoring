import { Injectable } from '@angular/core';
import { UserModel } from '../core/models/user';
import { localStorageConfig } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userLogin(user: UserModel): void {
    localStorage.setItem(localStorageConfig, JSON.stringify(user));
  }

  public userLogout(): void {
    localStorage.removeItem(localStorageConfig);
  }

  public getUserInfo(): string {
    const userInfo: UserModel = JSON.parse(localStorage.getItem(localStorageConfig));
    if (userInfo) {
      return userInfo.username;
    }
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem(localStorageConfig);
  }
}
