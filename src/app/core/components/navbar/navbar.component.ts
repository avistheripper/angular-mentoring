import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {
  private authService: AuthService;
  private router: Router;
  public authSubscription: Subscription;
  public isAuth: boolean;
  public userName: { first: string; last: string};
  constructor(
    authService: AuthService,
    router: Router
    ) {
      this.authService = authService;
      this.router = router;
    }
  public ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
    this.authSubscription = this.authService.getUserInfo()
      .subscribe(res => this.userName = res.name,
                 (error: HttpErrorResponse) => this.router.navigate(['/login']));
  }

  public onLogOut(): void {
    this.authService.userLogout();
    this.router.navigate(['/login']);
    this.isAuth = false;
  }

  public ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
