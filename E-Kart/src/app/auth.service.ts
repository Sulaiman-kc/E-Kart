import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'


@Injectable()
export class AuthService {

  // private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/adminlogin";
  private _adminloginUrl = "http://localhost:3000/api/adminlogin";

  constructor(private http: HttpClient,
              private _router: Router) { }

  // registerUser(user) {
  //   return this.http.post<any>(this._registerUrl, user)
  // }

  loginAdmin(user) {
    return this.http.post<any>(this._adminloginUrl, user)
  }
  logoutAdmin() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
