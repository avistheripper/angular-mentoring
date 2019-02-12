import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

import { CourseItemModel } from '../../core/models/course-item';
import { COLOR_SET } from '../constants/constants';

@Directive ({
    selector: '[appCourseBorder]'
})
export class BorderDirective {
    public el: ElementRef;
    public renderer: Renderer2;
    constructor(el: ElementRef, renderer: Renderer2) {
        this.el = el;
        this.renderer = renderer;
    }

    @Input('courseBorder') set pickColor(courseItem: CourseItemModel) {
        const currentDateMls: number = new Date().getTime();
        const courseDate: number = new Date(courseItem.date).getTime();
        if (courseDate < currentDateMls &&
            courseDate >= currentDateMls - 8.64e7 * 14) {
           this.setColor(COLOR_SET.green);
        } else if (courseDate > currentDateMls) {
            this.setColor(COLOR_SET.blue);
        } else {
           this.setColor();
        }
    }
    public setColor(color: string = COLOR_SET.grey): void {
        this.renderer.setStyle(
            this.el.nativeElement.querySelector('.card'), 'border', `2px solid ${color}`
            );
    }

}
