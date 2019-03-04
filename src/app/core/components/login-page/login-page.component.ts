import { Component, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { LogIn } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent implements OnDestroy {
  private store: Store<AppState>;
  public username: string;
  public password: string;
  public authSubscription: Subscription;
  constructor(
    store: Store<AppState>
    ) {
      this.store = store;
    }

  public onLogin(): void {
    this.store.dispatch(new LogIn({
      login: this.username,
      password: this.password
    }));
  }

  public ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
