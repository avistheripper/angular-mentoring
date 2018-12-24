import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { CourseItemComponent } from './course-item.component';
import { PipesModule } from '../../../shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

 @NgModule({
  declarations: [
    CourseItemComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    CourseItemComponent
  ]
})
 export class CourseItemModule {}