import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {Timesheets} from '../model/Timesheets/timesheetmodal';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class TimesheetService {
    private apiUrl = 'https://localhost:44397/api/TimeSheet';

    constructor(private http: HttpClient) { }

    // Create operation
    createTimesheet(timesheet: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, timesheet);
    }

    // Read operation
    getTimesheet(id: number): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<any>(url);
    }

    // Update operation
    updateTimesheet(id: number, timesheet: any): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<any>(url, timesheet);
    }

    // ...

        listTimesheets(): Observable<any> {
            // return TIMESHEET_DATA;

            return of([]);
            //return this.http.get<any>(this.apiUrl);
        }

           // Read operation
    // getTimesheets() {
        

    //     return this.http.get<any>(`${this.apiUrl}/GetTimesheets`)
    //     .toPromise()
    //     .then(res => <Timesheets[]>res.data)
    //     .then(data => { 
    //         debugger
    //         return data; });
    // }
    getTimesheets(): Observable<Timesheets[]> {
        // return this.http.get<{ data: Timesheets[] }>(`${this.apiUrl}/GetTimesheets`)
        //     .pipe(
        //         map(res => res.data)
        //     );

            return this.http.get<Timesheets[]>(`${this.apiUrl}/GetTimesheets`)
            .pipe(
              map(res => res)
            );
        
      }
    }
