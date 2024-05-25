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
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'vendor', component: VendorComponent },
  // { path: 'contract', component: ContractComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: LandingComponent,
    canActivate: [AuthGuard], // Include the AuthGuard here
    children: [
      { path: 'contract', component: ContractComponent, data: { requiredRole: ['admin'] } },
      { path: 'profile', component: ProfileComponent, data: { requiredRole: ['admin'] } },
      { path: 'home', component: HomeComponent, data: { requiredRole: ['admin']} },
      { path: 'timesheet', component: TimesheetComponent, data: { requiredRole: ['admin','employee'] } },
      { path: 'timesheet/create', component: CreateTimesheetComponent, data: { requiredRole: ['admin','employee'] } },
      { path: 'emp', component: EmpComponent, data: { requiredRole: ['admin'] } },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
