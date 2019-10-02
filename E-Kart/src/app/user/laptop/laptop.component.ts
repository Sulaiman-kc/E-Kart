import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  productId = localStorage.getItem('productId')
  constructor(public productService: ProductService,public route:ActivatedRoute) { }
  product:{}
  ngOnInit() {

    this.products()
    // console.log(this.product);
    this.productList(this.productId)
  }
  products(){
    this.product = this.productService.product
  }


  addToCart(id){
    this.productService.addToCartApi(id).subscribe((res)=>{
      alert('Added to Cart')

    })
  }

  productList(_id: string){
    this.productService.getSingleProduct(_id).subscribe((res)=>{
      console.log(res);
      // alert('added')
    })
  }

  // productList(_id : string){
  
  //   this.productService.getSingleProduct(_id).subscribe((res)=>{
  //     this.productService.product = res as Product[];
  //   })
  // }
}
