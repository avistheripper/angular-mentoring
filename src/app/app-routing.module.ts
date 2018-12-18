import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './core/components/courses-page/courses-page.component';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent
  },
  {
    path: 'about',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
