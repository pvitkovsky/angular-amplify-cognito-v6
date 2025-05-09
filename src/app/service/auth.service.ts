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

  constructor(private authenticator: AuthenticatorService, private router: Router) {
  }

  public signOut(){
    this.authenticator.signOut()
    this.router.navigate(["auth"])
  }

  public async getToken(): Promise<string | undefined> {
    const cognitoTokens = (await fetchAuthSession()).tokens;
    if(!cognitoTokens || !cognitoTokens.idToken){
      return undefined
    }
    return cognitoTokens.idToken.toString();
  }

}
