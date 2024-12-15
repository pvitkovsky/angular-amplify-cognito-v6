import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticatorService, AuthSubscriptionCallback} from '@aws-amplify/ui-angular';
import {Router} from '@angular/router';
import { fetchAuthSession } from "aws-amplify/auth";

export interface AuthToken {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authenticated$: Observable<any> = new Observable<any>((subscriber) => {
    const callback: AuthSubscriptionCallback = (authState) => {
      subscriber.next(authState.authStatus === 'authenticated');
    };
    this.authenticator.subscribe(callback);
  });

  public currentUser$: Observable<any> = new Observable<any>((subscriber) => {
    const callback: AuthSubscriptionCallback = (authState) => {
      if(authState.authStatus !== "authenticated"){
        subscriber.next("Not authenticated")
      }
      subscriber.next(authState.user);
    };
    this.authenticator.subscribe(callback);
  });

  constructor(private authenticator: AuthenticatorService, private router: Router) {
  }

  public signOut(){
    this.authenticator.signOut()
    this.router.navigate(["auth"])
  }

  public async getToken(): Promise<any> { // TODO: JWTs are here;
    var cognitoTokens = (await fetchAuthSession()).tokens;
    let rawToken = cognitoTokens?.idToken?.toString();
    let payload = cognitoTokens?.idToken?.payload;
    return rawToken;
  }

}
