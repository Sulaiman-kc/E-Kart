import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../product.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

declare var M: any;

@Component({
  selector: 'app-adminlaptops',
  templateUrl: './adminlaptops.component.html',
  styleUrls: ['./adminlaptops.component.css'],
  providers: [ProductService]
})

export class AdminlaptopsComponent implements OnInit {

  constructor(public productService: ProductService,
              private _router: Router,
              private _auth: AuthService) {
                
               }


  ngOnInit() {
  
    this.resetForm();
    this.productList();
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.productService.selectedProduct = {
      _id:"",
      name:"",
      Cost: "",
      Discount: "",
      Brand: "",
      model_no:"",
      Sales_Package:"",
      Model_Number: "",
      Part_Number: "",
      Series: "",
      Color: "",
      Type: "",
      Suitable_For: "",
      Battery_Backup: "",
      Battery_Cell: "",
      MS_Office_Provided: "",
      Processor_Brand: "",
      Processor_Name: "",
      Processor_Generation: "",
      SSD: "",
      RAM: "",
      RAM_Type: "",
      HDD_Capacity: "",
      Processor_Variant: "",
      Clock_Speed: "",
      Expandable_Memory: "",
      RAM_Frequency: "",
      Cache: "",
      RPM: "",
      Graphic_Processor: "",
      Number_of_Cores: "",
      OS_Architecture: "",
      Operating_System: "",
      System_Architecture: "",
      Mic_In: "",
      RJ45: "",
      USB_Port: "",
      HDMI_Port: "",
      Multi_Card_Slot: "",
      Touchscreen: "",
      Screen_Size: "",
      Screen_Resolution: "",
      Screen_Type: "",
      Speakers: "",
      Internal_Mic: "",
      Wireless_LAN: "",
      Bluetooth: "",
      Ethernet : "",
      Dimensions: "",
      Weight: "",
      Disk_Drive: "",
      Web_Camera: "",
      Read_Write_Speed: "",
      Keyboard: "",
      Pointer_Device: "",
      Additional_Features :"",
      Other_Accessories: "",
      Warranty_Summary: "",
      Warranty_Service_Type: "",
      Covered_in_Warranty: "",
      Not_Covered_in_Warranty: "",

      // image1:"",
      // image2:"",
      // image3:"",
      // image4:"",
      // image5:"",
    }
  }


  productList(){
  
    this.productService.getProduct().subscribe((res)=>{
      this.productService.product = res as Product[];
    })
  }
  
  onSubmit(form : NgForm){    
    if(form.value._id == "" ||  form.value._id==null){
        console.log("Add")
        this.productService.postProduct(form.value).subscribe(res =>{
          this.resetForm(form);
          this.productList()
          // M.toast({html: 'One Item Added' ,classes:'rounded'})
        })      
    }
    else{
      console.log("Update")
      this.productService.putProduct(form.value).subscribe(res =>{
        this.resetForm(form);
        this.productList()
        // M.toast({html: 'One Item Updated' ,classes:'rounded'})
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
        // M.toast({html: 'One Item added' ,classes:'rounded'})
      })
    }
  }
}

