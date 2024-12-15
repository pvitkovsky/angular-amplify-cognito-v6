import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean> {
    return this.authService.isAuth().then(value => {
      const auth = !!value
      if(!auth){
        this.router.navigate(["auth"])
      }
      return auth
    })
  }
}
