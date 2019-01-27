import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './components/navbar/navbar.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterModule } from './components/footer/footer.module';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { HomeComponent } from './components/home/home.component';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import { CourseItemModule } from './components/course-item/course-item.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesService } from '../services/courses.service';
import { AuthService } from '../services/auth.service';
import { LoginPageModule } from '../core/components/login-page/login-page.module';
import { FormsModule } from '@angular/forms';
import { CourseEditPageComponent } from './components/course-edit-page/course-edit-page.component';

@NgModule({
  declarations: [
    LayoutComponent,
    CoursesPageComponent,
    HomeComponent,
    EmptyPageComponent,
    CourseEditPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BreadcrumbsModule,
    FooterModule,
    NavbarModule,
    LoginPageModule,
    ToolbarModule,
    CourseItemModule,
    SharedModule
  ],
  exports: [
    LayoutComponent,
    BreadcrumbsModule,
    FooterModule,
    NavbarModule,
    ToolbarModule,
    LoginPageModule
    ],
    providers: [CoursesService, AuthService]
})
export class CoreModule { }
