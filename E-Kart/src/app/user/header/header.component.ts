import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ProductService } from 'src/app/product.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartLen
  cart
  len
  user = localStorage.getItem('user')
  ngOnInit() {
    this.getCart()
    this.len = localStorage.setItem('cart',this.cartLen) 
    console.log(this.len);
    this.cartLen
  }
  constructor(private _auth: AuthService, private productService: ProductService) {}
  
  getCart(){
    this.productService.getCart().subscribe((res)=>{
      this.cartLen = res.product.length;
      this.cart = res.product
    })
  }
}