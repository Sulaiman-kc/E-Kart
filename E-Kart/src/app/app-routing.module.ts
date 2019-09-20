import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { EventsComponent } from './events/events.component';
import { AuthGuard } from './auth.guard';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminlaptopsComponent } from './adminlaptops/adminlaptops.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/head',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'head',
    component: HeaderComponent
  },
  {
    path: 'admindashboard',
    canActivate:[AuthGuard],
    component: AdmindashboardComponent
  },
  {
    path: 'adminlaptops',
    canActivate:[AuthGuard],
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
