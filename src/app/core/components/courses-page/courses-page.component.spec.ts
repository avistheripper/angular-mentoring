import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CoursesPageComponent } from './courses-page.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { EmptyPageComponent } from '../empty-page/empty-page.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CoursesService } from 'src/app/services/courses.service';
import { HttpClientModule } from '@angular/common/http';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, PipesModule, ScrollingModule, HttpClientModule],
      declarations: [ CoursesPageComponent, BreadcrumbsComponent, ToolbarComponent, CourseItemComponent, EmptyPageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ CoursesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create CoursesPageComponent', () => {
    expect(component).toBeTruthy();
  });
});
