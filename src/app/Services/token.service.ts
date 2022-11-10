import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  CreateToken(token:string|any){
    localStorage.setItem('authToken' , token );
  }

  GetToken(){
    return localStorage.getItem('authToken');
  }

  RemoveToken(){
    localStorage.removeItem('authToken');
  }
}
