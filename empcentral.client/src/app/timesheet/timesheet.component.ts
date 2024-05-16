import { Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TimesheetService } from '../services/timesheet.service';

export interface PeriodicElement {
  Vendor: string;
  status: string;
  recordedHours: number;
  periodStarting: string;
  periodEnding: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Vendor: "Apple", status: 'InProcess', recordedHours: 40, periodStarting: '15th April 2024', periodEnding: "19th April 2024" },
  { Vendor: "Apple", status: 'Approved', recordedHours: 40, periodStarting: '8th April 2024', periodEnding: "12th April 2024" },
  { Vendor: "Apple", status: 'Approved', recordedHours: 40, periodStarting: '1st April 2024', periodEnding: "5th April 2024" },
  { Vendor: "Apple", status: 'Approved', recordedHours:40, periodStarting: '25th March 2024', periodEnding: "29th March 2024" },

];

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrl: './timesheet.component.css',
})
export class TimesheetComponent {


  displayedColumns: string[] = ['status', 'transferredTo', 'periodStarting', 'periodEnding', 'recordedHours'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private timeSheetSvc: TimesheetService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngonInit() {
    this.timeSheetSvc.listTimesheets().subscribe((timesheet) => {
      this.dataSource = new MatTableDataSource<PeriodicElement>(timesheet);
    });
  }


}
