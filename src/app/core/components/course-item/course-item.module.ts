import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { CourseItemComponent } from './course-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

 @NgModule({
  declarations: [
    CourseItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CourseItemComponent
  ]
})
 export class CourseItemModule {}