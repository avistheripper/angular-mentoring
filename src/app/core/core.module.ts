import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './navbar/navbar.module';
import { LayoutComponent } from './layout/layout.component';
import { FooterModule } from './footer/footer.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { CourseItemModule } from './course-item/course-item.module';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    LayoutComponent,
    CoursesPageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    CourseItemModule,
    FooterModule,
    NavbarModule,
    ToolbarModule
  ],
  exports: [
    LayoutComponent,
    BreadcrumbsModule,
    CourseItemModule,
    FooterModule,
    NavbarModule,
    ToolbarModule
    ]
})
export class CoreModule { }
