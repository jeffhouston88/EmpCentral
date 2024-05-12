import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface TimesheetElement {
  project: string;
  task: string;
  type: number;
  periodStarting: string;
  periodEnding: string;
}

const ELEMENT_DATA: TimesheetElement[] = [
  {
    project: "1",
    task: 'Hydrogen',
    type: 1.0079,
    periodStarting: '12th April 2024',
    periodEnding: "sdfs"
  }
];

@Component({
  selector: 'app-create-timesheet',
  templateUrl: './create-timesheet.component.html',
  styleUrl: './create-timesheet.component.css',
})
export class CreateTimesheetComponent {


  displayedColumns: string[] = ['project', 'task', 'type', 'day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];
  dataSource = new MatTableDataSource<TimesheetElement>(ELEMENT_DATA);

  timesheetForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.timesheetForm = new FormGroup({
      period: new FormControl(''),
      project: new FormControl(''),
      task: new FormControl(''),
      type: new FormControl(''),
      day1: new FormControl(''),
      day2: new FormControl(''),
      day3: new FormControl(''),
      day4: new FormControl(''),
      day5: new FormControl(''),
      day6: new FormControl(''),
      day7: new FormControl('')
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  saveTimesheet() {
    console.log(this.timesheetForm.value);
  }

  onSave() {
    alert('Timesheet saved successfully');
    console.log(this.timesheetForm.value);
  }

  onCancel() {
    this.timesheetForm.reset();
  }

}
