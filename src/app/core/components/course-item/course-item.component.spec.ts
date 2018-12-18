import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import {CourseItemModel} from '../../models/course-item';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  const courseItem: CourseItemModel = {
    id: 12,
    title: 'testing course',
    creationDate: '21-11-17',
    duration: 122,
    description: 'Mock course'
  };

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  }));
  it('should create CourseItem component', () => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
