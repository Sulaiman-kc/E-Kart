import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component'
import { EventsComponent } from './user/events/events.component';
import { AuthGuard } from './auth.guard';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminlaptopsComponent } from './admin/adminlaptops/adminlaptops.component';
import { HeaderComponent } from './user/header/header.component';
import { RegisterComponent } from './user/register/register.component';
import { AdminGuard } from './admin.guard';
import { ComputersComponent } from './admin/computers/computers.component';
import { MobileComponent } from './admin/mobile/mobile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/head',
    pathMatch: 'full'
  },
  {
    path: 'events',
    canActivate:[AuthGuard],
    component: EventsComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'head',
    component: HeaderComponent
  },
  {
    path: 'admindashboard',
    canActivate:[AdminGuard],
    component: AdmindashboardComponent
  },
  {
    path: 'admincomputers',
    canActivate:[AdminGuard],
    component: ComputersComponent
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
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation : 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
