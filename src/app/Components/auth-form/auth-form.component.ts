import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  switchClass = 0;
  constructor(private AuthService:AuthService,private token:TokenService) { }

  ngOnInit(): void {
  }

  regFormValidation = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  })

  loginFormValidation = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  })

  setSwitchClass() {
    this.switchClass ^= 1;
  }

  Login() {
    if (this.loginFormValidation.valid) {
      this.AuthService.Login(this.loginFormValidation).subscribe(data =>{
        this.token.CreateToken(data);
      })
      this.loginFormValidation.reset();
    } else {

    }
  }

  SignUp() {
    if (this.regFormValidation.valid) {
      this.AuthService.SignUP(this.loginFormValidation).subscribe(data =>{
        this.token.CreateToken(data);
      })
      this.regFormValidation.reset();
    } else {

    }
  }

}