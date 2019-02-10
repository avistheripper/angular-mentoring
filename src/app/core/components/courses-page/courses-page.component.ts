import { Component, OnInit, OnDestroy } from '@angular/core';

import {CourseItemModel} from '../../models/course-item';
import { CoursesService } from 'src/app/services/courses.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  private courseService: CoursesService;
  private courseServiceSubscription: Subscription;
  public courses: Array<CourseItemModel>;
  constructor(courseService: CoursesService) {
    this.courseService = courseService;
  }

  public ngOnInit(): void {
    this.initCourses();
  }

  public initCourses(): void {
    this.courseServiceSubscription = this.courseService.getCourses()
      .subscribe(data => this.courses = data);
  }
  public onCourseDelete(id: number): void {
    this.courseServiceSubscription
      .add(this.courseService.removeCourse(id)
      .subscribe(() => this.initCourses()));
  }

  public onCourseSearch(queryString: string): void {
    this.courseServiceSubscription
      .add(this.courseService.getCourseWithParams(queryString)
      .subscribe(res => {
        this.courses = res;
      },
                 (error: HttpErrorResponse) => console.log(error)));
  }

  public ngOnDestroy(): void {
    this.courseServiceSubscription.unsubscribe();
  }

}
