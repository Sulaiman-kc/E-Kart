import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product.model';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart
productId = Array()
quantity
product
productLen
cartProducts = Array()
item1
item2
item3 = 0
item
cartQ = []
dis = []
total =[]
Ltotal = []
Gtotal = 0
  constructor(public productService: ProductService) { 
    this.productList();
  }
  cartLen
  ngOnInit() {
    
  }
  // ######################  og  ############################
  productList(){
    this.productService.getProduct().subscribe((res)=>{
      this.product = res as Product[];
      this.productLen = this.product.length
      // console.log(this.product.length);
      this.productService.getCart().subscribe((res)=>{
        this.cart = res.product;  
        localStorage.setItem('cartid',res._id)      
        this.cartLen = res.product.length
        // console.log(this.cart);
        // console.log(this.cart[0].productId);
        for(this.item1 = 0; this.item1 < this.product.length;this.item1++){
          for(this.item2 = 0; this.item2 < this.cart.length;this.item2++){
            if(this.product[this.item1]._id === this.cart[this.item2].productId ){
              this.cartProducts.push(this.product[this.item1])
              this.dis[this.item3] = this.product[this.item1].Cost*( this.product[this.item1].Discount/ 100)
              this.total[this.item3] = (this.product[this.item1].Cost - this.dis[this.item3]) 
              this.Ltotal[this.item3] = this.total[this.item3] * this.cart[this.item2].quantity
              this.Gtotal = this.Gtotal + this.Ltotal[this.item3]
              this.cartQ[this.item3] = this.cart[this.item2].quantity
              this.item3++
            }
          }          
        }
        this.item = this.cartProducts  
        // console.log(this.Gtotal);  
        localStorage.setItem('item',JSON.stringify(this.item))
        localStorage.setItem('total',(JSON.stringify(this.Gtotal)))
        // localStorage.setItem('cart',(JSON.stringify(this.cartLen)))
        localStorage.setItem('productId',(JSON.stringify(this.productId)))
      })
      
    })
  }
}
