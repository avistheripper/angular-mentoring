import { NgModule } from '@angular/core';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  imports: [
    PipesModule,
    DirectivesModule,
  ],
  exports: [
    PipesModule,
    DirectivesModule,
  ]
})
export class SharedModule { }
