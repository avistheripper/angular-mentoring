import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoursesService } from './courses.service';
import { API_URL } from '../shared/constants/constants';

describe('Courses service', () => {
  let injector: TestBed;
  let service: CoursesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesService]
    });
    injector = getTestBed();
    service = injector.get(CoursesService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  describe('#getUsers', async () => {
    it('should return an Observable<CourseItemModel[]>', () => {
      service.getCourses().subscribe(courses => {
        expect(courses.length).toBe(30);
      });

      const req = httpMock.expectOne(`${API_URL}/courses`);
      expect(req.request.method).toBe('GET');
    });
  });
});
