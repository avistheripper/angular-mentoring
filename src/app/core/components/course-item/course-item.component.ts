import { Component, OnInit, Input , EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

import {CourseItemModel} from '../../models/course-item';

@Component({
  selector: 'app-course-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: CourseItemModel;
  @Output() public courseDelete: EventEmitter<number> = new EventEmitter();

  public ngOnInit (): void {
    console.log(`${this.courseItem.name} has been loaded!`);
  }

  public deleteHandle(id: number): void {
    this.courseDelete.emit(id);
  }

}
