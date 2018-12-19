import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: []
})
export class ToolbarComponent {
  public logQuery(value: string): void {
    console.log(value);
  }
}
