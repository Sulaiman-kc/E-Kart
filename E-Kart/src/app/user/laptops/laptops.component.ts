import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(public productService: ProductService,private _auth: AuthService,public router:Router) { }

  ngOnInit() {
    this.productList()
  }

  addToCart(id){
    this.productService.addToCartApi(id).subscribe((res)=>{
      alert('added')
    })
  }


  productList(){
    this.productService.getProduct().subscribe((res)=>{
      this.productService.product = res as Product[];
    })
  }
  onClick(Product){
    this.productService.product = Product as Product[];
    this.router.navigate(['/laptop']);

  }
}
