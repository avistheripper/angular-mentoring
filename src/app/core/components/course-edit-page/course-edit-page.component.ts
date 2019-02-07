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
      title: '',
      creationDate: '',
      duration: undefined,
      description: ''
    };
   }

  public ngOnInit(): void {
    this.routeSubscription = this.activeRoute.params.subscribe(params => {
      this.courseId = +params.id;
      if (this.courseId) {
        this.initCourseEdit();
      }
    });
  }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  public initCourseEdit(): void {
    this.course = this.courseService.getCourse(this.courseId);
  }

  public onSave(): void {
    if (this.courseId) {
      this.courseService.updateCourse({
        title: this.course.title,
        creationDate: this.course.creationDate,
        duration: this.course.duration,
        description: this.course.description
      });
    } else {
      this.courseService.createCourse({
        id: Math.floor(Math.random() * 100),
        title: this.course.title,
        creationDate: this.course.creationDate,
        duration: this.course.duration,
        description: this.course.description,
        topRated: false
      });
    }
    this.router.navigate(['/']);
  }

  public onCancel(): void {
    this.router.navigate(['/']);
  }
}
