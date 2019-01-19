import { CourseItemModel } from "../core/models/course-item";

export const COURSES_MOCK: Array<CourseItemModel> = [
    {
      id: 12,
      title: 'Video Course Java',
      creationDate: '2017-12-27',
      duration: 40,
      description: 'Best Java 8 course ever.',
      topRated: true
    },
    {
      id: 13,
      title: 'Tech talk Golang',
      creationDate: '2018-12-15',
      duration: 130,
      description: 'Why did they invent Go?',
      topRated: false
    },
    {
      id: 14,
      title: 'Course Angular 7',
      creationDate: '2019-9-17',
      duration: 34,
      description: 'Bring it on with Angular!',
      topRated: true
    }
  ];