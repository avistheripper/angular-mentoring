import { Component } from '@angular/core';

import {CourseItemModel} from '../course-item';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent {
  public coursesMock: Array<CourseItemModel> = [
    {
      id: 12,
      title: 'Video Course Java',
      creationDate: '21-11-2017',
      duration: 40,
      description: 'Best Java 8 course ever.'

    },
    {
      id: 13,
      title: 'Tech talk Golang',
      creationDate: '21-11-2017',
      duration: 120,
      description: 'Why did they invent Go?'

    },
    {
      id: 14,
      title: 'Course Angular 7',
      creationDate: '21-11-2017',
      duration: 34,
      description: 'Bring it on with Angular!'

    }
  ];

  public logMessage(id: number): void {
    console.log(id);
}

}
