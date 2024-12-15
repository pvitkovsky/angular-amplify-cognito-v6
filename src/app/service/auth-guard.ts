import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {map, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.authenticated$.pipe(tap(
      (isAuthenticated: boolean) => {
        if(!isAuthenticated){
          this.router.navigate(["auth"])}
        }

    ))
  }
}
