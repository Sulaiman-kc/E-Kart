import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    console.log(this._auth.loginUser);
  }

  loginUser () {
    
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res.user);
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', res.user.username)
        localStorage.setItem('userId', res.user._id)
        this._router.navigate(['/events'])
      },
      err => console.log(err)
    ) 
  }

}
