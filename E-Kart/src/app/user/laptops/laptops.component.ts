import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(public productService: ProductService,private _auth: AuthService) { }

  ngOnInit() {
    console.log(this.productList());
    this.productList()
  }

  productList(){
  
    this.productService.getProduct().subscribe((res)=>{
      this.productService.product = res as Product[];
    })
  }
}
