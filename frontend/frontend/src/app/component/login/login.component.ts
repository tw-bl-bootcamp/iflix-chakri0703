import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import {MatSnackBar} from '@angular/material';
import { Router} from '@angular/router'

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
  constructor(
    private userService:UserService,
    private matSnackBar:MatSnackBar,
    private route:Router,
  ) { }

  ngOnInit() {
  }

  loginSubmit(){
    let data={
      'email':this.email.value,
      'password':this.password.value,
    }
    console.log("data in login component==>",data);
    
    this.userService.post(data).subscribe(
      (response:any)=>{
        console.log("login respone==>",response);
        this.matSnackBar.open('login Sucessfull','End Now ',{duration:4000})
        this.route.navigate(['/login']);
      },
      error=>{
        console.log("error in login===>",error);
        
      }
    )
  }

}
