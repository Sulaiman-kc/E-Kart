import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  error = 0
  cartLen = 0
  cart
  user = localStorage.getItem('user')
  constructor(private _auth: AuthService,
              private _router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    console.log(this._auth.loginUser);
    this.getCart
  }

  loginUser () {
    
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token)
        localStorage.setItem('user', res.user.username)
        localStorage.setItem('userId', res.user._id)
        this.error = 0
        location.reload();
        this._router.navigate(['/'])
      },
      err => {
        this.error = err.error.text
        console.log(this.error)
      }
    ) 
  }

  getCart(){
    this.productService.getCart().subscribe((res)=>{
      this.cartLen = res.product.length;
      this.cart = res.product
      this.ngOnInit
      console.log(this.cart); 
      localStorage.setItem('cart',JSON.parse(JSON.stringify(res.product)))
    })
  }
}
