import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
@Component({
  template: ``,
  standalone: false,
})
export class BaseComponent implements OnDestroy {

  destroy$: Subject<void> = new Subject();
   ngOnDestroy(): void {
     this.destroy$.next();
     this.destroy$.complete();
  }
}
