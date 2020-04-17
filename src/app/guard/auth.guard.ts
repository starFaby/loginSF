import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SigninService } from '../services/signin.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private signinService: SigninService,
    private authenticationService: AuthenticationService,
    private router: Router) {
  }
  canActivate(): boolean {
    if (this.signinService.onLoggedIn()) { //  || this.authenticationService.onLoggedIn
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
