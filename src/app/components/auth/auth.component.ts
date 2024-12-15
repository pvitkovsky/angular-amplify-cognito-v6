import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import {AuthenticatorServiceFacade} from '@aws-amplify/ui';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  constructor(private router: Router, public authenticator: AuthenticatorService) {
    authenticator.subscribe((val: AuthenticatorServiceFacade) => {
      if(val.authStatus == "authenticated"){
        this.toMain();
      }
    })
  }

  toMain() {
    this.router.navigate(['/'])
  }
}
