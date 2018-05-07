
import {ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot}    from '@angular/router';

import {AuthService}            from './auth.service';
import {Injectable}             from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return this.checkLogin();
  }

  checkLogin(): boolean {
    return true;
  }

}
