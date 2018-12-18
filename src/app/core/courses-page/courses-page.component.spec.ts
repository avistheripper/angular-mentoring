import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CoursesPageComponent } from './courses-page.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { CourseItemComponent } from '../course-item/course-item.component';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CoursesPageComponent, BreadcrumbsComponent, ToolbarComponent, CourseItemComponent ]
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
