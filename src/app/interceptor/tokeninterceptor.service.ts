import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { SigninService } from '../services/signin.service';


@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req, next) {
    const signinService = this.injector.get(SigninService);
    const tokenizedREq = req.clone({
      setHeaders: {
        authorization: `Bearer ${signinService.onGetToken()}`
      }
    });
    return next.handle(tokenizedREq);
  }
}
