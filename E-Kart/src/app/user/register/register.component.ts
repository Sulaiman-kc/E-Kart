import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import * as EmailValidator from 'email-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {email:"",username:"",mobilenumber:"",password:""}
  error = "0"
  constructor(private _auth: AuthService,
              private _router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
  }
  registerUser() {
    console.log(this.registerUserData);
    if(this.registerUserData.username == ""){
      this.error = "Please Enter Your Name"
      return 0
    }
    if(!EmailValidator.validate(this.registerUserData.email)){
      this.error = "Invalid Email"
      return 0
    }
    
    if(this.registerUserData.mobilenumber.length != 10){
      this.error = "Invalid Mobile Number"
      return 0
    }
    if(this.registerUserData.password.length < 8){
      this.error = "Password must contain 8 letters"
      return 0
    }
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        this.toastr.success('Succsessfully Registered');
        this.toastr.success('Now you can login');
        this._router.navigate(['/'])
      },
      err => console.log(err)
    )      
  }


}
