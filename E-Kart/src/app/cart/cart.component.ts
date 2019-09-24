import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:[]
  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productList()
    this.getCart()
  }


  productList(){
    this.productService.getProduct().subscribe((res)=>{
      // this.productService.product = res as Product[];
    })
  }

  getCart(){
    this.productService.getCart().subscribe((res)=>{
      console.log(res);
      this.cart = res;
    })
  }
}
