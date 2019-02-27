import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.state';
import { LogOut } from '../../../store/actions/auth.actions';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {
  private authService: AuthService;
  private router: Router;
  private store: Store<AppState>;
  public authSubscription: Subscription;
  public isAuth: boolean;
  public userStatus$: Observable<boolean>;
  public userName: { first: string; last: string};
  constructor(
    authService: AuthService,
    router: Router,
    store: Store<AppState>
    ) {
      this.authService = authService;
      this.router = router;
      this.store = store;
    }
  public ngOnInit(): void {
    this.userStatus$ = this.authService.getUserStatus()
      .pipe(map((status) => status));
    this.authSubscription = this.authService.getUserInfo()
      .subscribe(res => this.userName = res.name,
                 (error: HttpErrorResponse) => this.router.navigate(['/login']));
  }

  public onLogOut(): void {
    this.store.dispatch(new LogOut({}));
  }

  public ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
