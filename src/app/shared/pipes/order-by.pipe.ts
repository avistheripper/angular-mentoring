import { Pipe, PipeTransform }   from '@angular/core';

import { CourseItemModel } from '../../core/models/course-item';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
  public transform(value: Array<CourseItemModel>, field: string): Array<CourseItemModel> {
    if (!value) {
      return;
    }
    if (field.startsWith('-')) {
      field = field.substring(1);
      if (typeof value[field] === 'string' || value[field] instanceof String) {
        return [...value].sort((a, b) => b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => b[field] - a[field]);
    } else {
      if (typeof value[field] === 'string' || value[field] instanceof String) {
        return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => a[field] - b[field]);
    }
  }
}
