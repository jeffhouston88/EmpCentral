import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimeSheet } from './timesheet.model';
import { MessageService } from 'primeng/api';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrl: './timesheet.component.css',
  providers: [MessageService]
})
export class TimesheetComponent {


  selectedTimesheets!: TimeSheet;
  datasource1 = new TimeSheet(1, 3, 12, 2023, new Date(2023, 12, 17), new Date(2023, 12, 23), 40, 8, 8, 8, 8, 8, 8, 8, [1],true);
  datasource2 = new TimeSheet(2, 4, 12, 2023, new Date(2023, 12, 24), new Date(2023, 12, 31), 40, 8, 8, 8, 8, 8, 8, 8, [1],true);
  datasource = new Array < TimeSheet>();
  StartDate = new Date(2023, 12, 21);
  tdate = new Date(2024, 1, 1);

  uploadedFiles: any[] = [];
  allAuthors: any[];
  Years: any[];
  Months: any[];
  selectedYear: Number;
  selectedMonth: Number;

  constructor(private messageService: MessageService) { }

  
  ngOnInit(): void {
    this.datasource.push(this.datasource1);
    this.datasource.push(this.datasource2);
    this.selectedYear = 2024;
    this.selectedMonth = 8;


    this.allAuthors = [
      { label: '1', value: 1 },
      { label: '2', value: 2 }
      
    ];

    this.Years = [
      { label: '2023', value: 2023 },
      { label: '2024', value: 2024 },
      { label: '2025' ,value: 2025 }
    ];

    this.Months = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 },
      { label: '6', value: 6 },
      { label: '7', value: 7 },
      { label: '8', value: 8 },
      { label: '9', value: 9 },
      { label: '10', value: 10 },
      { label: '11', value: 11 },
      { label: '12', value: 12 }
    ];


  }


  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  generateinvoice(table: Table) {
    table.clear();
    const doc = new jsPDF();
    doc.text('hello word', 10, 10);
    doc.save('Hello.pdf');


  }


}
