import {Component} from '@angular/core';
import {AuthService} from './service/auth.service';
import {filter, flatMap, Observable, of, shareReplay} from 'rxjs';
import {BaseComponent} from './components/shared/BaseComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent extends BaseComponent {

  authenticated$: Observable<boolean> = of(false);
  user$: Observable<any> = of(undefined);
  token$: Observable<string | undefined> = of(undefined)

  constructor(private auth: AuthService) {
    super();
    this.user$ = auth.currentUser$;
    this.authenticated$ = auth.authenticated$.pipe(shareReplay(1));
    this.token$ = this.authenticated$.pipe(
      filter(val=>val===true),
      flatMap(_ => this.auth.getToken()));
  }

  onSignOut() {
    this.auth.signOut()
  }
}
