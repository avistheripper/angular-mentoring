import { Component, OnInit } from '@angular/core';

import {CourseItemModel} from '../../models/course-item';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styles: []
})
export class CoursesPageComponent implements OnInit {
  private courseService: CoursesService;
  public coursesMock: Array<CourseItemModel>;
  constructor(courseService: CoursesService) {
    this.courseService = courseService;
  }

  public ngOnInit(): void {
    this.coursesMock = this.courseService.getCourses();
  }

  public onCourseDelete(id: number): void {
    this.coursesMock = [...this.courseService.removeCourse(id)];
  }

}
