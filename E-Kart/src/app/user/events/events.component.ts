import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product.model';
import { AuthService } from 'src/app/auth.service';
  

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [ProductService]
})
export class EventsComponent implements OnInit {

  events = []
  constructor() {   }

  ngOnInit() {
   
    
  }
  
}
