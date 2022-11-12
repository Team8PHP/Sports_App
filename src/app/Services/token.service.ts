import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  CreateToken(token:string|any,user:string|any){
    localStorage.setItem('authToken' , token );
    localStorage.setItem('userId' , user );
  }

  GetToken(){
    return localStorage.getItem('authToken');
  }
  GetUser(){
    return localStorage.getItem('userId');
  }

  RemoveToken(){
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId' );
  }
}
