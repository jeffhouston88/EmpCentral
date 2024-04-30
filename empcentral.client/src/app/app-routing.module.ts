import { NgModule } from '@angular/core';

import { EmpComponent } from './emp/emp.component'
import { TimesheetComponent } from './timesheet/timesheet.component'
import { VendorComponent } from './vendor/vendor.component'
import { ContractComponent } from './contract/contract.component'
import { LoginComponent } from './login/login/login.component';
import { LandingComponent } from './landing/landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile/profile.component';
import { HomeComponent } from './home/home/home.component';
import { CreateTimesheetComponent } from './create-timesheet/create-timesheet.component';

const routes: Routes = [
  { path: 'vendor', component: VendorComponent },
  // { path: 'contract', component: ContractComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: LandingComponent,
    children: [
      { path: 'contract', component: ContractComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'home', component: HomeComponent },
      { path: 'timesheet', component: TimesheetComponent },
      { path: 'create', component: CreateTimesheetComponent },
      { path: 'emp', component: EmpComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
