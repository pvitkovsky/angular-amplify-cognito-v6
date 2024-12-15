import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {fetchAuthSession, getCurrentUser} from 'aws-amplify/auth';

export interface AuthToken {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$:Observable<any> = from(getCurrentUser().catch(_ => "Not Logged On"))
  // TODO: add Store to save user; else has to reload;

  constructor() {
  }


  public async isAuth(): Promise<any> {
    var cognitoTokens = (await fetchAuthSession()).tokens;
    let rawToken = cognitoTokens?.idToken?.toString();
    let payload = cognitoTokens?.idToken?.payload;
    return rawToken;
  }

}
