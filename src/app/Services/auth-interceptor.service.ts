import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private token: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let reqToken = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${this.token.GetToken()}`)
    })
    return next.handle(reqToken)
  }

}
