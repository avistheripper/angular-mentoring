import { NgModule } from '@angular/core';
import { TimePrecisionPipe } from './date-format.pipe';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [TimePrecisionPipe, OrderByPipe],
  exports: [TimePrecisionPipe, OrderByPipe]
})
export class PipesModule {}
