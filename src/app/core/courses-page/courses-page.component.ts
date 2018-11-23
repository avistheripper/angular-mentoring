import { Component, OnInit } from '@angular/core';
import {CourseItem} from '../course-item';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  public coursesMock: CourseItem[] = [
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
  ]
  constructor() { }

  ngOnInit() {
  }

}
