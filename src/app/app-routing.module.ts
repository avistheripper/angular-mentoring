import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './core/components/courses-page/courses-page.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginPageComponent } from './core/components/login-page/login-page.component';
import { CourseEditPageComponent } from './core/components/course-edit-page/course-edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent
  },
  {
    path: 'about',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'create',
    component: CourseEditPageComponent
  },
  {
    path: 'edit/:id',
    component: CourseEditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
