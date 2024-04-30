import { Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  status: string;
  transferredTo: string;
  recordedHours: number;
  periodStarting: string;
  periodEnding: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { transferredTo: "1", status: 'Hydrogen', recordedHours: 1.0079, periodStarting: '12th April 2024', periodEnding: "sdfs" }
];

@Component({
  selector: 'app-create-timesheet',
  templateUrl: './create-timesheet.component.html',
  styleUrl: './create-timesheet.component.css',
})
export class CreateTimesheetComponent {


  displayedColumns: string[] = ['status', 'transferredTo', 'periodStarting', 'periodEnding', 'recordedHours'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



}
