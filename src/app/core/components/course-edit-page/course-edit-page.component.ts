import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses.service';
import { CustomValidators } from 'src/app/helpers/validators';

import { CourseItemModel, AuthorsModel } from '../../models/course-item';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html'
})
export class CourseEditPageComponent implements OnInit, OnDestroy {
  private activeRoute: ActivatedRoute;
  private courseService: CoursesService;
  private router: Router;
  private fb: FormBuilder;
  public authorsList$: Observable<AuthorsModel[]>;
  public course: CourseItemModel;
  public courseForm: FormGroup;
  public routeSubscription: Subscription;
  public courseSubscription: Subscription;
  public courseId: number;

  constructor(
    activeRoute: ActivatedRoute,
    courseService: CoursesService,
    router: Router,
    fb: FormBuilder,
    ) {
    this.activeRoute = activeRoute;
    this.courseService = courseService;
    this.router = router;
    this.fb = fb;
    this.course = {
      name: '',
      date: '',
      duration: undefined,
      description: ''
    };
    this.createForm();
   }

  public ngOnInit(): void {
    this.authorsList$ = this.courseService.getAuthors()
      .pipe(map(res => res));
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

  public createForm(): void {
    this.courseForm = this.fb.group({
      name: ['',
        Validators.compose([
          Validators.required,
          Validators.maxLength(50)
        ])
      ],
      description: ['',
        Validators.compose([
          Validators.required,
          Validators.maxLength(500)]
        )],
      date: ['', Validators.compose([Validators.required, CustomValidators.dateControl])],
      duration: ['', Validators.required],
      authors: ['', Validators.required]
    });
  }

  public initCourseEdit(): void {
    this.courseSubscription = this.courseService.getCourse(this.courseId)
      .subscribe((data) => {
        this.course = data;
        const { name, duration, date, authors, description } = data;
        this.courseForm.patchValue({
          name,
          description,
          date,
          duration
        });
        this.courseForm.get('authors').setValue(authors);
      });
  }

  public onSave(): void {
      this.courseService.createCourse(this.courseForm.value)
          .subscribe(() => this.router.navigate(['/']));
  }

  public onCancel(): void {
    this.router.navigate(['/']);
  }
}
