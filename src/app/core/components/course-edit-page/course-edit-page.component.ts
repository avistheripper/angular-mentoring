import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { Subscription } from 'rxjs';
import { CourseItemModel } from '../../models/course-item';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html'
})
export class CourseEditPageComponent implements OnInit, OnDestroy {
  private activeRoute: ActivatedRoute;
  private courseService: CoursesService;
  private router: Router;
  public course: CourseItemModel;
  public routeSubscription: Subscription;
  public courseSubscription: Subscription;
  public courseId: number;

  constructor(
    activeRoute: ActivatedRoute,
    courseService: CoursesService,
    router: Router
    ) {
    this.activeRoute = activeRoute;
    this.courseService = courseService;
    this.router = router;
    this.course = {
      name: '',
      date: '',
      duration: undefined,
      description: ''
    };
   }

  public ngOnInit(): void {
    this.routeSubscription = this.activeRoute.params
      .subscribe(params => {
        this.courseId = +params.id;
        if (this.courseId) {
          this.initCourseEdit();
        }
    });
  }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    if (this.courseSubscription) { this.courseSubscription.unsubscribe(); }
  }

  public initCourseEdit(): void {
    this.courseSubscription = this.courseService.getCourse(this.courseId)
      .subscribe(data => this.course = data);
  }

  public onSave(): void {
    if (this.courseId) {
      this.courseService.updateCourse({
        name: this.course.name,
        date: this.course.date,
        duration: this.course.duration,
        description: this.course.description
      });
    } else {
      this.courseSubscription
        .add(this.courseService.createCourse({
          name: this.course.name,
          duration: this.course.duration,
          date: this.course.date,
          description: this.course.description,
          topRated: false
      }).subscribe(() => this.router.navigate(['/'])));
    }
  }

  public onCancel(): void {
    this.router.navigate(['/']);
  }
}
