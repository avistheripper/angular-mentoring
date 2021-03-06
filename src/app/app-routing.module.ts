import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './core/components/courses-page/courses-page.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { CourseEditPageComponent } from './core/components/course-edit-page/course-edit-page.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/authGuard';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'create',
    component: CourseEditPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    component: CourseEditPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
