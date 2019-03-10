import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

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
import { CourseEditPageComponent } from './components/course-edit-page/course-edit-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthInterceptor } from '../helpers/auth.interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptorService } from '../helpers/loader.interceptor';
import { LoaderService } from '../services/loader.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../store/app.state';
import { AuthEffects } from '../store/effects/auth.effects';

@NgModule({
  declarations: [
    LayoutComponent,
    CoursesPageComponent,
    HomeComponent,
    EmptyPageComponent,
    CourseEditPageComponent,
    NotFoundPageComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ScrollingModule,
    RouterModule,
    FormsModule,
    NgSelectModule,
    BreadcrumbsModule,
    FooterModule,
    NavbarModule,
    LoginPageModule,
    ToolbarModule,
    CourseItemModule,
    SharedModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects])
  ],
  exports: [
    LayoutComponent,
    BreadcrumbsModule,
    FooterModule,
    NavbarModule,
    ToolbarModule,
    LoginPageModule
    ],
    providers: [
      CoursesService,
      AuthService,
      HttpClientModule,
      LoaderService,
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
      {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true}
    ]
})
export class CoreModule { }
