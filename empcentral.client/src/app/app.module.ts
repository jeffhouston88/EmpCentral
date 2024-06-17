import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

import { EmpListComponent } from './employees/emp-list/emp-list.component';
//import { EmpComponent } from './emp/emp.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './landing/landing/landing.component';
import { LoginComponent } from './login/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { PTimesheetsComponent } from './timesheetscomponent/p-timesheets.component';

// Remove the import statement for 'TableModule'
import {ToastModule} from 'primeng/toast';
// Remove the duplicate import statement for 'CalendarModule'
// import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LoginService } from './services/login.service';
import { TimesheetService } from './services/timesheet.service';
import { EmpDetailsComponent } from './employees/emp-details/emp-details.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractDetailsComponent } from './contract/contract-details/contract-details.component'; 



@NgModule({
  declarations: [
    AppComponent,
    
    
    LandingComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    EmpListComponent,
    PTimesheetsComponent,
    EmpDetailsComponent,
    ContractListComponent,
    ContractDetailsComponent
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
    MatDialogModule,
    DialogModule,
    ButtonModule, MenubarModule, InputTextModule,
    MatListModule, InputSwitchModule, CalendarModule,
    TabViewModule,
    TableModule, FileUploadModule, InputNumberModule, DropdownModule, FlexModule, FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
     MessageService, ConfirmationService, LoginService, TimesheetService,
    provideAnimationsAsync(), provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
