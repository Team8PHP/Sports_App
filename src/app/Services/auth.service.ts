import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { baseUrl } from 'src/environments/environment';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private token:TokenService) { }

  Login(formInput: FormGroup) {
    return this.http.post(baseUrl + "api/sanctum/token", formInput.value, {
      headers: new HttpHeaders({
        "Accept": "application/json"
      }),
      observe: "body",
      responseType: "text"
    })
  }

  SignUP(formInput: FormGroup) {
    return this.http.post(baseUrl + "api/signup", formInput.value)
  }

  isLoggedin(){
      return this.token.GetToken()?true:false;
  }

  LogOut() {
    this.token.RemoveToken();
  }
  
}
