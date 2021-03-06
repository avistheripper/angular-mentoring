import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: []
})
export class ToolbarComponent {
  @Output() public emitSearchQuery: EventEmitter<string> = new EventEmitter();

  public searchQuery: string;

  public logQuery(event: KeyboardEvent): void {
    this.emitSearchQuery.emit((<HTMLInputElement>event.target).value);
  }
}
