import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { LogIn } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent implements OnInit, OnDestroy {
  private store: Store<AppState>;
  private fb: FormBuilder;
  public loginForm: FormGroup;
  public username: string;
  public password: string;
  public authSubscription: Subscription;
  constructor(
    store: Store<AppState>,
    fb: FormBuilder
    ) {
      this.store = store;
      this.fb = fb;
    }

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onLogin(): void {
    this.store.dispatch(new LogIn({
      login: this.loginForm.value.username,
      password: this.loginForm.value.password
    }));
  }

  public ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
