import { Component, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent implements OnDestroy  {
  private authService: AuthService;
  private router: Router;
  public authSubscription: Subscription;
  public username: string;
  public password: string;
  constructor(
    authService: AuthService,
    router: Router
    ) {
      this.authService = authService;
      this.router = router;
    }

  public onLogin(): void {
    this.authSubscription = this.authService.userLogin({
      login: this.username,
      password: this.password
    }).subscribe(res => {
        localStorage.setItem('userToken', res.token);
        this.router.navigate(['/about']);
    },
                 (error: HttpErrorResponse) => console.log(error)
    );
  }

  public ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
