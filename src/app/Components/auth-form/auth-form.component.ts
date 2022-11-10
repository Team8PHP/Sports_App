import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  switchClass = 0;
  constructor() { }

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

}
