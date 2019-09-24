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

  constructor(public productService: ProductService,public route:ActivatedRoute) { }
  product:{}
  ngOnInit() {

    console.log(this.productService.product);
    this.products()
  }
  products(){
    this.product = this.productService.product
  }


  // productList(_id : string){
  
  //   this.productService.getSingleProduct(_id).subscribe((res)=>{
  //     this.productService.product = res as Product[];
  //   })
  // }
}
