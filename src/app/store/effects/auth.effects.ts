import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { AuthService } from '../../services/auth.service';
import {
  AuthActionTypes,
  LogIn, LogInSuccess, LogInFailure, LogOut
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  private actions: Actions;
  private authService: AuthService;
  private router: Router;
    constructor(
      actions: Actions,
      authService: AuthService,
      router: Router
    ) {
      this.actions = actions;
      this.authService = authService;
      this.router = router;
    }
  // tslint:disable
  @Effect()
    public LogIn: Observable<Action> = this.actions
      .ofType(AuthActionTypes.LOGIN)
      .map((action: LogIn) => action.payload)
      .switchMap((payload: Record<string, string>) => {
        return this.authService.userLogin({login: payload.login, password: payload.password})
          .map((res: {token: string}) => {
            return new LogInSuccess({token: res.token, login: payload.login});
          })
          .catch((error: string) => {
            return Observable.of(new LogInFailure({ error: error }));
          });
      });
  @Effect({ dispatch: false })
      public LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user) => {
          localStorage.setItem('userToken', user.payload.token);
          this.router.navigateByUrl('/');
        })
      );
  @Effect({ dispatch: false })
    public LogInFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_FAILURE)
      );
  @Effect({ dispatch: false })
    public LogOut: Observable<any> = this.actions.pipe(
      ofType(AuthActionTypes.LOGOUT),
      tap(() => {
        localStorage.removeItem('userToken');
        this.router.navigate(['/login']);
      })
    );
}
