import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {
  public isAuth: boolean;
  private authService: AuthService;
  private router: Router
  constructor(
    authService: AuthService,
    router: Router
    ) {
      this.authService = authService;
      this.router = router;
    }

  public ngOnInit(): void {
    const isNotAuth = !this.authService.isAuthenticated();
    if (isNotAuth) {
      this.router.navigate(['/login']);
    }
  }
}
