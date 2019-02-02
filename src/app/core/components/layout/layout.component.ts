import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {
  private authService: AuthService;
  private router: Router;
  public isAuth: boolean;
  constructor(
    authService: AuthService,
    router: Router
    ) {
      this.authService = authService;
      this.router = router;
    }

  public ngOnInit(): void {
    const isNotAuthenticated: boolean = !this.authService.isAuthenticated();
    if (isNotAuthenticated) {
      this.router.navigate(['/login']);
    }
  }
}
