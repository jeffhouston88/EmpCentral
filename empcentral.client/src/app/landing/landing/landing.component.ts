import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  menuitems: MenuItem[];
  panelOpenState = false;

  constructor(private http: HttpClient, public router: Router) {
    this.menuitems = [
      {
        label: 'Employees',
        routerLink: '/emp'
      },
      {
        label: 'Vendors',
        routerLink: '/vendor'
      },
      {
        label: 'Timesheets',
        routerLink: '/timesheet'
      },
      {
        label: 'Contracts',
        routerLink: '/contract'
      }

    ];
  }
}
