import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email=new FormControl('',[Validators.required,Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(4)]);

  getEmailErrorMessage()
  {
    return this.email.hasError('required')?'Email cannot be empty':
    this.email.hasError('email')?'Not Valid Email':'';
  }
  getPasswordErrorMessage()
  {
    return this.password.hasError('required')?'Email cannot be empty':
    this.password.hasError('minlength')?'Password should have atleast 4 characters':'';
  }
  constructor() { }

  ngOnInit() {
  }

}
