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
    return this.http.post(baseUrl + "auth/login", formInput.value, {
      headers: new HttpHeaders({
        "Accept": "application/json"
      }),
    })
  }

  SignUP(formInput: FormGroup) {
    return this.http.post(baseUrl + "auth/register", formInput.value)
  }

  isLoggedin(){
      return this.token.GetToken()?true:false;
  }

  LogOut() {
    this.token.RemoveToken();
  }
  
}
