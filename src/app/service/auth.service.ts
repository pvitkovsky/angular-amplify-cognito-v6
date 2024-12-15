import {Injectable} from '@angular/core';;
import {BehaviorSubject} from 'rxjs';
import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';

export interface AuthToken {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);

  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    this.loadCurrentSession();
  }

  private async loadCurrentSession(): Promise<void> {
    try {
      const user = await getCurrentUser();
      this.currentUserSubject.next(user);
    } catch (error) {
      console.log(error);
      this.currentUserSubject.next(null);
    }
  }

}
