import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EndBidComponent } from './end-bid/end-bid.component';

const routes: Routes = [
  { path: '',  
  pathMatch: 'full',
  component: LoginComponent },
  { path: 'dashboard',  
  component: DashboardComponent },
  { path: 'end-bid',  
  component: EndBidComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
