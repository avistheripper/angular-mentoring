import { Component, OnInit, OnDestroy } from '@angular/core';

import {CourseItemModel} from '../../models/course-item';
import { CoursesService } from 'src/app/services/courses.service';
import { Subscription, Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { debounceTime, map, filter, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  private courseService: CoursesService;
  private courseServiceSubscription: Subscription;
  public courses: Array<CourseItemModel>;
  public searchTerm$: Subject<string> = new Subject<string>();
  constructor(courseService: CoursesService) {
    this.courseService = courseService;
  }

  public ngOnInit(): void {
    this.initCourses();
  }

  public initCourses(): void {
    this.courseServiceSubscription = this.courseService.getCourses()
      .subscribe(data => this.courses = data);
    this.searchTerm$.pipe(
      debounceTime(400),
      filter(text => text === '' || text.length > 3),
      map((query: string) => this.courseService.getCourseWithParams(query)),
      switchAll())
      .subscribe(res => {
        this.courses = res;
      },
                 (err: HttpErrorResponse) => console.log(err));
  }
  public onCourseDelete(id: number): void {
    this.courseServiceSubscription
      .add(this.courseService.removeCourse(id)
      .subscribe(() => this.initCourses()));
  }

  public onCourseSearch(queryString: string): void {
    this.searchTerm$.next(queryString);
  }

  public ngOnDestroy(): void {
    this.courseServiceSubscription.unsubscribe();
  }

}
