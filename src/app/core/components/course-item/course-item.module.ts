import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { CourseItemComponent } from './course-item.component';
import { PipesModule } from '../../../shared/pipes/pipes.module';

 @NgModule({
  declarations: [
    CourseItemComponent,
    PipesModule
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    CourseItemComponent
  ]
})

 export class CourseItemModule {}