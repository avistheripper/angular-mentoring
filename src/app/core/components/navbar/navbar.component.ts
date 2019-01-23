import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  public isAuth: boolean;
  private authService: AuthService;
  private router: Router;
  constructor(
    authService: AuthService,
    router: Router
    ) {
      this.authService = authService;
      this.router = router;
    }
  public ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
  }

  public onLogOut(): void {
    this.authService.userLogout();
    this.router.navigate(['/login']);
    this.isAuth = false;
  }
}
