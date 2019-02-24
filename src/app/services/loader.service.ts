import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LoaderState } from '../core/components/loader/loader';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject: Subject<LoaderState> = new Subject<LoaderState>();
  public loaderState: Observable<LoaderState> = this.loaderSubject.asObservable();
  public show(): void {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }
  public hide(): void {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }
}
