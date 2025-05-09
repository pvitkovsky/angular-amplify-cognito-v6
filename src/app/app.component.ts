import {Component} from '@angular/core';
import {AuthService} from './service/auth.service';
import {BaseComponent} from './components/shared/BaseComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent extends BaseComponent {

  token: string | undefined;

  constructor(private auth: AuthService) {
    super();
    this.auth.getToken().then(token => {
      this.token = token;
    })
  }

  onSignOut() {
    this.auth.signOut()
  }
}
