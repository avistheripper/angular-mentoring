import { CourseItemModel } from '../core/models/course-item';

export const COURSES_MOCK: Array<CourseItemModel> = [
    {
      id: 12,
      name: 'Video Course Java',
      date: '2017-12-27',
      duration: 40,
      description: 'Best Java 8 course ever.',
      topRated: true
    },
    {
      id: 13,
      name: 'Tech talk Golang',
      date: '2018-12-15',
      duration: 130,
      description: 'Why did they invent Go?',
      topRated: false
    },
    {
      id: 14,
      name: 'Course Angular 7',
      date: '2019-9-17',
      duration: 34,
      description: 'Bring it on with Angular!',
      topRated: true
    }
  ];
