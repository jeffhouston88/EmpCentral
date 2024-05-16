import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TimesheetService {
    private apiUrl = 'http://api.example.com/timesheets';

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

    // Delete operation
    deleteTimesheet(id: number): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<any>(url);
    }

    // List operation
    listTimesheets(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
}