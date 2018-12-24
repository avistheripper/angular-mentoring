import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { BorderDirective } from "./course.directive";
import { CourseItemModel } from "src/app/core/models/course-item";
import { TestBed } from "@angular/core/testing";

@Component({
    template: `<div [appCourseBorder]="item"></div>`
})
export class Container {
    public item: CourseItemModel = {
        id: 12,
        title: 'Video Course Java',
        creationDate: '2017-12-27',
        duration: 40,
        description: 'Best Java 8 course ever.',
        topRated: true
    }
}

describe('Directive: borderDirective', () => {
    let fixture;
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ Container, BorderDirective ],
        schemas: [ NO_ERRORS_SCHEMA ]
      })
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(Container);
        fixture.detectChanges();
      });

    it('should have border color grey', (() => {
        const div: HTMLElement = fixture.nativeElement.querySelector('div');
        const border = div.style.border;
        expect(border).toBe('2px solid grey');
        // expect(el.style.border).toBe('2px solid grey');
    }));
  });