import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user.model';
import { ProductService } from 'src/app/product.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cart
  user = localStorage.getItem('user')
  ngOnInit() {
    this.getCart()
  }
  constructor(private _auth: AuthService, private productService: ProductService) {}
  getCart(){
    this.productService.getCart().subscribe((res)=>{
      this.cart = res;
      console.log(this.cart.product.length);
      this.ngOnInit
    })
  }
}