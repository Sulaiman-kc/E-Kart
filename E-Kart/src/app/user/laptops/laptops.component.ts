import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(public productService: ProductService,private _auth: AuthService,public router:Router,private toastr: ToastrService) { }
  cart = localStorage.getItem('cart')
  dis = []
  item
  pro = []
  total = []
  ngOnInit() {
    this.productList()    
  }

  addToCart(id){
    this.productService.addToCartApi(id).subscribe((res)=>{
      this.toastr.success('Added to the cart');
    })
  }


  productList(){
    this.productService.getProduct().subscribe((res)=>{
      this.productService.product = res as Product[];
      console.log(this.productService.product.length);
      this.pro = this.productService.product
      for(this.item = 0;this.pro.length > this.item; this.item++){
        this.dis[this.item] = this.pro[this.item].Cost * (this.pro[this.item].Discount/100);
        this.total[this.item] = this.pro[this.item].Cost - this.dis[this.item]
      }
    })
  }
  onClick(Product){
    this.productService.product = Product as Product[];
    localStorage.setItem('productId',Product._id)
    this.router.navigate(['/laptop']);
  }
}
