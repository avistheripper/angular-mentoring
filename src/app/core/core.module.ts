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

@NgModule({
  declarations: [
    LayoutComponent,
    CoursesPageComponent,
    HomeComponent,
    EmptyPageComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    FooterModule,
    NavbarModule,
    ToolbarModule,
    CourseItemModule,
    SharedModule
  ],
  exports: [
    LayoutComponent,
    BreadcrumbsModule,
    FooterModule,
    NavbarModule,
    ToolbarModule
    ]
})
export class CoreModule { }
