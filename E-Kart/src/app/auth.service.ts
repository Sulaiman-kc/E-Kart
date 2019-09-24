import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from './user.model';


@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _adminloginUrl = "http://localhost:3000/api/adminlogin";
  selectedUser: User;
  User: User[];
  constructor(private http: HttpClient,
              private _router: Router) { }


  loginAdmin(user) {
    return this.http.post<any>(this._adminloginUrl, user)
  }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  getUser() {
    return this.http.get<any>(this._loginUrl)
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('user') 
    localStorage.removeItem('userId')

    this._router.navigate(['/login'])
  }
  getToken() {
    return localStorage.getItem('token')
  }

  getId() {
    return localStorage.getItem('userId')
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
