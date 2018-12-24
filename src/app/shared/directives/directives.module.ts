import { NgModule } from '@angular/core';

import { BorderDirective } from './course.directive';

@NgModule({
    declarations: [BorderDirective],
    exports: [BorderDirective]
})

export class DirectivesModule { }