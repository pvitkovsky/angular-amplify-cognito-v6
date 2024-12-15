import { Component } from '@angular/core';
import {AuthService} from './service/auth.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  user$: Observable<any> = of(undefined);

  constructor(private auth: AuthService) {
    this.user$ = auth.currentUser$;
  }

}
