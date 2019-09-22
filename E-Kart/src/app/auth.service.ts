import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'


@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _adminloginUrl = "http://localhost:3000/api/adminlogin";

  constructor(private http: HttpClient,
              private _router: Router) { }

  isAdm = localStorage.getItem('adminnav')
  isUsr = localStorage.getItem('usernav')


  loginAdmin(user) {
    return this.http.post<any>(this._adminloginUrl, user)
  }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  loggedInAdmin() {
    return !!localStorage.getItem('admin')    
  }

  logoutAdmin() {
    localStorage.removeItem('admin')
    this._router.navigate(['/adminlogin'])
  }
}
