import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TimesheetService } from '../services/timesheet.service';

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
  totalHours: number;

  lstPeriods: any[] = [
    { value: '2024/05/04-2024/05/10', viewValue: '2024/05/04-2024/05/10' },
    { value: '2024/05/11-2024/05/17', viewValue: '2024/05/11-2024/05/17' },
    { value: '2024/05/18-2024/05/24', viewValue: '2024/05/18-2024/05/24' },
    { value: '2024/05/25-2024/05/31', viewValue: '2024/05/25-2024/05/31' }
  ];

  days: any[] = [];

  constructor(private timeSheetSvc: TimesheetService) { }

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
      day7: new FormControl(''),
      totalHours: new FormControl('0')
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onSave() {
    this.timeSheetSvc.createTimesheet(this.timesheetForm.value).subscribe((data) => {
      alert('Timesheet saved successfully');
    }, (error) => { alert('Error saving timesheet'); });

  }

  onCancel() {
    this.timesheetForm.reset();
  }

  changePeriod() {
    debugger;
    const period = "2024/05/04-2024/05/10";
    const _v = this.timesheetForm.controls['period'].value;

    const periodVals = period.split('-');

    const startDate = new Date(periodVals[0]);
    const endDate = new Date(periodVals[1]);

    // loop through the days and add dates as MMM dd yyyy them to the days array
    const daysArray = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      daysArray.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    this.days = daysArray;
  }  

  hourschange() {
    this.totalHours =
    (
      parseInt(this.timesheetForm.controls['day1'].value) || 0 )+
      (parseInt(this.timesheetForm.controls['day2'].value) || 0 )+
      (parseInt(this.timesheetForm.controls['day3'].value) || 0 )+
      (parseInt(this.timesheetForm.controls['day4'].value) || 0 )+
      (parseInt(this.timesheetForm.controls['day5'].value) || 0 )+
      (parseInt(this.timesheetForm.controls['day6'].value) || 0 )+
      (parseInt(this.timesheetForm.controls['day7'].value) || 0);
    this.timesheetForm.controls['totalHours'].setValue(this.totalHours);

  }
}
