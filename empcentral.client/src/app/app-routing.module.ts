import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp/emp.component'
import { TimesheetComponent } from './timesheet/timesheet.component'
import { VendorComponent } from './vendor/vendor.component'
import { ContractComponent } from './contract/contract.component'

const routes: Routes = [
  { path: 'emp', component: EmpComponent },
  { path: 'timesheet', component: TimesheetComponent },
   { path: 'vendor', component: VendorComponent },
  { path: 'contract', component: ContractComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
