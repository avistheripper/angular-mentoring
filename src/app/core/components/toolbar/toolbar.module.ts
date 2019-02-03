import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ToolbarComponent} from './toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        ToolbarComponent
    ]
})

export class ToolbarModule {}
