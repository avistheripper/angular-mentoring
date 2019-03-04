import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    LOGOUT = '[Auth] Logout',
}

export class LogIn implements Action {
    public readonly type: string = AuthActionTypes.LOGIN;
    constructor(public payload: Record<string, string>) {}
}

export class LogInSuccess implements Action {
    public readonly type: string = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: Record<string, string>) {}
  }

export class LogInFailure implements Action {
    public readonly type: string = AuthActionTypes.LOGIN_FAILURE;
    constructor(public payload: Record<string, string>) {}
  }

export class LogOut implements Action {
    public readonly type: string = AuthActionTypes.LOGOUT;
    constructor(public payload: Record<string, string>) {}
  }

export type All =
 | LogIn
 | LogInSuccess
 | LogInFailure
 | LogOut;
