import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { EmpComponent } from './emp/emp.component';
import { VendorComponent } from './vendor/vendor.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ContractComponent } from './contract/contract.component';
import { EmpContactComponent } from './emp/emp-contact/emp-contact.component';
import { EmpListComponent } from './emp/emp-list/emp-list.component';


import html2canvas from 'html2canvas';

import { LandingComponent } from './landing/landing/landing.component';
import { LoginComponent } from './login/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile/profile.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './home/home/home.component';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CreateTimesheetComponent } from './create-timesheet/create-timesheet.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    VendorComponent,
    TimesheetComponent,
    ContractComponent,
    EmpContactComponent,
    LandingComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    CreateTimesheetComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule, MatExpansionModule,
    MatGridListModule, MatFormFieldModule, MatInputModule,
    MatCardModule, MatIconModule,
    MatButtonModule, MatMenuModule, MatToolbarModule, MatSidenavModule,
    ButtonModule, MenubarModule, InputTextModule,
    MatListModule, InputSwitchModule, CalendarModule,
    TabViewModule,
    TableModule, FileUploadModule, InputNumberModule, DropdownModule, FlexModule, FlexLayoutModule
  ],
  providers: [
    provideAnimationsAsync(), provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
