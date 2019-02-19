import { Component, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent implements OnDestroy {
  private authService: AuthService;
  public username: string;
  public password: string;
  public authSubscription: Subscription;
  constructor(
    authService: AuthService,
    ) {
      this.authService = authService;
    }

  public onLogin(): void {
    this.authSubscription = this.authService.userLogin({
      login: this.username,
      password: this.password
    }).subscribe(res => console.log(res), (err: HttpErrorResponse) => console.log(err));
  }

  public ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
