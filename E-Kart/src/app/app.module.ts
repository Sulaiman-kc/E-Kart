import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { EventsComponent } from './user/events/events.component';
import { AuthService } from './auth.service';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminlaptopsComponent } from './admin/adminlaptops/adminlaptops.component';
import { ProductService } from './product.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HeaderComponent } from './user/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { RegisterComponent } from './user/register/register.component';
import { AdminComponent } from './admin/admin.component'
import { AdminheaderComponent } from './admin/Components/adminheader/adminheader.component';
import { AdminfooterComponent } from './admin/Components/adminfooter/adminfooter.component';
import { AdminsidebarComponent } from './admin/Components/adminsidebar/adminsidebar.component';
import { MobileComponent } from './admin/mobile/mobile.component';
import { MaintainComponent } from './maintain/maintain.component';
import { LaptopComponent } from './user/laptop/laptop.component';
import { ComputerComponent } from './user/computer/computer.component';
import { LaptopsComponent } from './user/laptops/laptops.component';
import { MobilesComponent } from './user/mobiles/mobiles.component';
import { ComputersComponent } from './user/computers/computers.component';
import { NgxCurrencyModule } from "ngx-currency";
import { CartComponent } from './cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventsComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AdminlaptopsComponent,
    HeaderComponent,
    RegisterComponent,
    AdminComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminsidebarComponent,
    ComputersComponent,
    MobileComponent,
    LaptopComponent,
    ComputerComponent,
    LaptopsComponent,
    MobilesComponent,
    CartComponent,
    MaintainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule, 
    LayoutModule,   
    MatIconModule, 
    MatListModule, 
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    NgxCurrencyModule,
    MatBadgeModule,
    MatExpansionModule,
    MatCardModule,
    MatDatepickerModule,
    MatRadioModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
    
  ],
  exports:[MatAutocompleteModule,MatButtonToggleModule],
  providers: [AuthService, AuthGuard, ProductService,
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: TokenInterceptorService,
  //   multi: true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
