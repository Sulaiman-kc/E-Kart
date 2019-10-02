import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component'
import { EventsComponent } from './user/events/events.component';
import { AuthGuard } from './auth.guard';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminlaptopsComponent } from './admin/adminlaptops/adminlaptops.component';
import { RegisterComponent } from './user/register/register.component';
import { AdminGuard } from './admin.guard';
import { MobileComponent } from './admin/mobile/mobile.component';
import { LaptopsComponent } from './user/laptops/laptops.component';
import { MobilesComponent } from './user/mobiles/mobiles.component';
import { ComputersComponent } from './user/computers/computers.component';
import { LaptopComponent } from './user/laptop/laptop.component';
import { CartComponent } from './cart/cart.component';
import { MaintainComponent } from './maintain/maintain.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'main',
    component: MaintainComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'laptops',
    component: LaptopsComponent
  },
  {
    path: 'laptop',
    component: LaptopComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'computers',
    component: ComputersComponent
  },
  {
    path: 'mobiles',
    component: MobilesComponent
  },
  {
    path: 'admindashboard',
    canActivate:[AdminGuard],
    component: AdmindashboardComponent
  },
  {
    path: 'adminmobiles',
    canActivate:[AdminGuard],
    component: MobileComponent
  },
  {
    path: 'adminlaptops',
    canActivate:[AdminGuard],
    component: AdminlaptopsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
