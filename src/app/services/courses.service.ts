import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CourseItemModel, AuthorsModel } from '../core/models/course-item';
import { API_URL } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  public getCourses(): Observable<CourseItemModel[]> {
    return this.http.get<CourseItemModel[]>(`${API_URL}/courses`);
  }

  public getCourse(id: number): Observable<CourseItemModel> {
    return this.http.get<CourseItemModel>(`${API_URL}/courses/${id}`);
  }

  public createCourse(course: CourseItemModel): Observable<CourseItemModel> {
    return this.http.post<CourseItemModel>(`${API_URL}/courses`, course );
  }

  public getAuthors(): Observable<AuthorsModel[]> {
    return this.http.get<AuthorsModel[]>(`${API_URL}/authors`);
  }

  public getCourseWithParams(textFragment: string): Observable<CourseItemModel[]> {
    return this.http.get<CourseItemModel[]>(`${API_URL}/courses`, { params:  {textFragment}});
  }

  public removeCourse(id: number): Observable<void> {
    if (confirm('Are you sure about removing this course?')) {
      return this.http.delete<void>(`${API_URL}/courses/${id}`);
    }
  }
}
