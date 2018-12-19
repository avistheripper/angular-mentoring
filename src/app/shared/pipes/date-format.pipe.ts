import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'timePrecision'})
export class TimePrecisionPipe implements PipeTransform {
  public transform(value: number): string {
    const hour: number = 60;
    if (value <= hour) {
      return `${value} min`;
    } else {
      const r: number = Math.floor(value / hour);
      const t: number = value % hour;
      return `${r} h ${t} min`;
     }
  }
}
