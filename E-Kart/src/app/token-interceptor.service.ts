import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}
  intercept(req, next) {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        // headers: req.headers.set('Authorization', 'bearer ' + authService.getToken()),
        headers: req.headers.set('userId', 'userId '+authService.getId()),
        // userId: req.userId.set('userId',localStorage.getItem('userId'))
      }
    )
    return next.handle(tokenizedReq)
  }

}
