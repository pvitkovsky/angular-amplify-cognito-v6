import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  constructor(private router: Router) {
  }
  toMain() {
    this.router.navigate(['/'])
    // TODO: implement proper redirect after login
  }
}
