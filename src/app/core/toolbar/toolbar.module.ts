import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ToolbarComponent} from './toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ToolbarComponent
    ]
})

export class ToolbarModule {}
