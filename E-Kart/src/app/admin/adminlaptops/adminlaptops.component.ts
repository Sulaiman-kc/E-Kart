import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../product.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ToastrService } from 'ngx-toastr';

// this.toastr.success('Product deleted');

@Component({
  selector: 'app-adminlaptops',
  templateUrl: './adminlaptops.component.html',
  styleUrls: ['./adminlaptops.component.css'],
  providers: [ProductService]
})

export class AdminlaptopsComponent implements OnInit {

  constructor(public productService: ProductService,
              private _router: Router,
              private _auth: AuthService,
              private toastr: ToastrService) {
                
               }

  error = "0"
  ngOnInit() {
    this.resetForm();
    this.productList();
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.productService.selectedProduct = {
      _id:"",
           // laptop and computer

     name: "",
     URL: "",
     Cost: "",
     Number_Item:"",
     Discount: "",
     Brand: "",
     model_no: "",
     Sales_Package: "",
     Model_Number: "",
     HDD_Capacity: "",
     Series: "",
     Color: "",
     Type: "",
     RAM: "",
     Battery_Backup: "",
     Processor_Generation: "",
     Processor_Name: "",


     // mobile

     Operating_System: "",
     Internal_Storage: "",
     Expandable_Storage: "",
    }
  }


  productList(){
  
    this.productService.getProduct().subscribe((res)=>{
      this.productService.product = res as Product[];
    })
  }
  
  onSubmit(form : NgForm){   
    if((form.value.name == "") || 
    (form.value.URL == "") ||
    (form.value.Cost == "") || 
    (form.value.Number_Item == "") || 
    (form.value.Discount == "") || 
    (form.value.Brand == "") || 
    (form.value.Sales_Package == "") || 
    (form.value.Model_Number == "") || 
    (form.value.HDD_Capacity == "") || 
    (form.value.Series == "") || 
    (form.value.Color == "") || 
    (form.value.Type == "") || 
    (form.value.RAM == "") || 
    (form.value.Battery_Backup == "") || 
    (form.value.Processor_Generation == "") || 
    (form.value.Processor_Name == ""))
    {
      this.error = "Please Enter all the Input"
      return 0
    } 
    if(form.value._id == "" ||  form.value._id==null){
        console.log("Add")
        this.productService.postProduct(form.value).subscribe(res =>{
          this.resetForm(form);
          this.productList()
          this.toastr.success('New Product added');
          this.error = "0"
        })      
    }
    else{
      console.log("Update")
      this.productService.putProduct(form.value).subscribe(res =>{
        this.resetForm(form);
        this.productList()
        this.toastr.success('Product Updated');
        this.error = "0"
      })
    }
    
  }

  onEdit(product : Product){
    this.productService.selectedProduct = product;
    console.log(product);
    document.getElementById("top").scrollIntoView();
  }

  onDelete(_id: string, form :NgForm){
    if(confirm('Are You Sure?') == true){
      this.productService.deleteProduct(_id).subscribe((res)=>{
        this.productList();
        this.resetForm(form);
        this.toastr.success('Product Deleted');
      })
    }
  }
}

