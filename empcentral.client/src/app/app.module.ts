import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
//import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

import { EmpComponent } from './emp/emp.component';
import { VendorComponent } from './vendor/vendor.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ContractComponent } from './contract/contract.component';
import { EmpContactComponent } from './emp/emp-contact/emp-contact.component';

import {jsPDF }  from 'jspdf';
import html2canvas from 'html2canvas';




@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    VendorComponent,
    TimesheetComponent,
    ContractComponent,
    EmpContactComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    AppRoutingModule, BrowserAnimationsModule,
    ButtonModule, MenubarModule, InputTextModule, InputSwitchModule, CalendarModule, TabViewModule, TableModule, FileUploadModule, InputNumberModule, DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
