import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private token: TokenService,private auth:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(this.auth.getUserId() == null){
      return next.handle(req);
    }
    let reqToken = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${this.token.GetToken()}`)
    })
    return next.handle(reqToken)
  }

}
