import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import {COURSES_MOCK} from '../utils/mock';

describe('CoursesService', () => {
  beforeEach(async () => TestBed.configureTestingModule({}));

  it('should be created', () => {
  const service: CoursesService = TestBed.get(CoursesService);
  expect(service).toBeTruthy();
  });
  it('should get courses', async () => {
  const service: CoursesService = TestBed.get(CoursesService);
  const courses = service.getCourses();
  expect(courses.length).toEqual(3);
    courses.forEach((course, i) => {
      expect(courses[i]).toEqual(COURSES_MOCK[i]);
    });
  });
  it('should get course by id', async () => {
  const service: CoursesService = TestBed.get(CoursesService);
  expect(service.getCourse(12)).toEqual({
    id: 12,
    title: 'Video Course Java',
    creationDate: '2017-12-27',
    duration: 40,
    description: 'Best Java 8 course ever.',
    topRated: true
    });
  });
  it('should delete course', async () => {
    const service: CoursesService = TestBed.get(CoursesService);
    service.removeCourse(12);
    expect(service.getCourses().length).toEqual(2);
  });
  it('should create course', async () => {
    const service: CoursesService = TestBed.get(CoursesService);
    const courseSample = {
      id: 22,
      title: 'Video Course Java',
      creationDate: '2017-12-27',
      duration: 40,
      description: 'Best Java 8 course ever.',
      topRated: true
    }
    service.createCourse(courseSample);
    expect(service.getCourse(22)).toEqual(courseSample)
  });
});
