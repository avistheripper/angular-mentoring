import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CourseItemComponent } from './course-item.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [ PipesModule ],
      declarations: [ CourseItemComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));
  it('should create CourseItem component', () => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
