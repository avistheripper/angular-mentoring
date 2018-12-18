import { Component, OnInit, Input , EventEmitter, Output } from '@angular/core';

import {CourseItemModel} from '../../models/course-item';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() public courseItem: CourseItemModel;
  @Output() public valueChange: EventEmitter<number> = new EventEmitter();

  public ngOnInit (): void {
    console.log(`${this.courseItem.title} has been loaded!`);
  }

  public deleteHandle(id: number): void {
    this.valueChange.emit(id);
  }

}
