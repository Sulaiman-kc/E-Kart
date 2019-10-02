import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.css']
})
export class MaintainComponent implements OnInit {

  constructor(private productService:ProductService,private toastr: ToastrService,private _router: Router,) { }
total
cartid
  ngOnInit() {
    this.cartid = localStorage.getItem('cartid')
    this.total = localStorage.getItem('total')
  }
  onDelete(){
    if(confirm('Are You Sure?') == true){
      this.productService.deleteCart(this.cartid).subscribe((res)=>{
        this.toastr.success('Your order has been successfully placed');
        this._router.navigate(['/'])
      })
    }
  }
}
