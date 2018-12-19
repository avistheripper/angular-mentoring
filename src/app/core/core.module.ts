import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from './components/navbar/navbar.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterModule } from './components/footer/footer.module';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { CourseItemModule } from './components/course-item/course-item.module';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { HomeComponent } from './components/home/home.component';
import { BorderDirective } from '../shared/directives';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
  declarations: [
    LayoutComponent,
    CoursesPageComponent,
    HomeComponent,
    BorderDirective,
    EmptyPageComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    CourseItemModule,
    FooterModule,
    NavbarModule,
    ToolbarModule,
    PipesModule
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
