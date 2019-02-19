import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { LoaderState } from './loader';
import { LoaderService } from 'src/app/services/loader.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private loaderService: LoaderService;
  public show: boolean = false;
  public show$: Observable<boolean>;
  constructor(loaderService: LoaderService) {
    this.loaderService = loaderService;
   }
  public ngOnInit(): void {
    this.show$ = this.loaderService.loaderState
      .pipe(map((state: LoaderState) => state.show));
  }
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
