import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseItemComponent } from './course-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CourseItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    CourseItemComponent
  ]
})
 export class CourseItemModule {}
