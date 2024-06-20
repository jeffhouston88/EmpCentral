import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {Timesheets, week} from '../model/Timesheets/timesheetmodal';
import { map } from 'rxjs/operators';
import { Data } from '@angular/router';


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



    getTimesheetwithSearch(startDate: Date, endDate: Date): Observable<Timesheets[]> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
debugger;
let params = new HttpParams()
.set('startDate', startDate.toISOString())
.set('endDate', endDate.toISOString());

        return this.http.get<Timesheets[]>(`${this.apiUrl}/GetTimesheetwithSearch`, { params })
            .pipe(
                map(res => res)
            );
    }


      getWeeks(): Observable<week[]> {
        // return this.http.get<{ data: Timesheets[] }>(`${this.apiUrl}/GetTimesheets`)
        //     .pipe(
        //         map(res => res.data)
        //     );

            return this.http.get<week[]>(`${this.apiUrl}/GetWeeks`)
            .pipe(
              map(res => res)
            );
        
      }

      getParamas(searchParams:any){
        let params = new HttpParams();
    
        // Append search parameters to HttpParams object
        for (const key in searchParams) {
          if (searchParams.hasOwnProperty(key)) {
            params = params.append(key, searchParams[key]);
          }
        }

        return params;
      }
    }
