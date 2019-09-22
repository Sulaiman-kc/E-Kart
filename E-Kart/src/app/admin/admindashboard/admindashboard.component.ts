import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
flag=1
  constructor(private _auth: AuthService,) { 
    localStorage.removeItem('usernav')
    localStorage.setItem('adminnav','true')   
  }

  ngOnInit() {
  }  
}
