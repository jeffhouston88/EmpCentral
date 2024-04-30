import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';



interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  menuitems: MenuItem[];
  constructor(private http: HttpClient) {

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

    ngOnInit() {
     // this.getForecasts();

      
        }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'empcentral.client';
}
