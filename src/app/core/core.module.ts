import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ToolbarComponent,
    CourseItemComponent,
    CoursesPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
