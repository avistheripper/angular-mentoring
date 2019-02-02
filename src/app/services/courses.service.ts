import { Injectable } from '@angular/core';

import { CourseItemModel } from '../core/models/course-item';
import { COURSES_MOCK } from '../utils/mock';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public coursesMock: Array<CourseItemModel> = COURSES_MOCK;

  public getCourses(): Array<CourseItemModel> {
    return this.coursesMock;
  }

  public getCourse(id: number): CourseItemModel {
    return this.coursesMock.find(course => course.id === id);
  }

  public createCourse(course: CourseItemModel): void {
    this.coursesMock.push(course);
  }

  public updateCourse(course: CourseItemModel): void {
    // find and then update logic here

  }

  public removeCourse(id: number): Array<CourseItemModel> {
    if (confirm('Are you sure about removing this course?')) {
      const indexToRemove: number = this.coursesMock.findIndex(course => course.id === id);
      this.coursesMock.splice(indexToRemove, 1);
      return this.coursesMock;
    }
  }
}
