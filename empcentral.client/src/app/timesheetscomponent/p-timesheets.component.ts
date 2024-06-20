import { Component, OnInit, Input, ViewChild } from '@angular/core';
// import { Product } from '../../app/model/';
// import { ProductService } from '../../../../app/services/product.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { TimesheetService } from '../../app/services/timesheet.service';
import { Timesheets,week } from '../../app/model/Timesheets/timesheetmodal';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-p-timesheets',
  templateUrl: './p-timesheets.component.html',
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
styleUrls: ['./p-timesheets.scss']
})
export class PTimesheetsComponent {
    @ViewChild('fileUpload') fileUpload: FileUpload;
    timesheetDialog: boolean = false;
    timeSheets: Timesheets[] =[ ];
    selectedtimeSheet: Timesheets[] = [];

    defaultTimesheet: Timesheets = {
        ID: 0,
        statusID: 0,
        project: "",
        vendor: "",
        status: "",
        recordedHours: 0,
        periodStarting: "",
        periodEnding: "",
        day1: 0,
        day2: 0,
        day3: 0,
        day4: 0,
        day5: 0,
        day6: 0,
        day7: 0,
        attachment: ""
    };
    timesheet: Timesheets = this.defaultTimesheet;
    weeks: week[] = []; // Fix the type declaration

    submitted: boolean = false;
    fromDate:Date;
    toDate:Date;

    // lang = [ 
    //     { name: "HTML" }, 
    //     { name: "ReactJS" }, 
    //     { name: "Angular" }, 
    //     { name: "Bootstrap" }, 
    //     { name: "PrimeNG" }, 
    // ]; 
    //   ]; 

    constructor(private timeSheetSvc:TimesheetService , private messageService: MessageService, private confirmationService: ConfirmationService) { }

    ngOnInit() {
       // this.productService.getProducts().then(data => this.products = data);
       this.getTimesheets();
   
    }

    onUpload(event: any) {
        // Handle the upload event
        console.log('File uploaded:', event);
      }
    
      clearFiles() {
        this.fileUpload.clear();
      }

    getTimesheets(): void {
      this.timeSheetSvc.getTimesheets().subscribe(
        data => {
          this.timeSheets = data;
        console.log(this.timeSheets);

        },
        error => {
          console.error('Error fetching timesheets', error);
        }
      );
    }

    getWeeks(): void {
        this.timeSheetSvc.getWeeks().subscribe(
          data => {
            this.weeks = data;
          console.log(this.timeSheets);
  
          },
          error => {
            console.error('Error fetching timesheets', error);
          }
        );
      } 
     
      convertToDate(dateString: string): Date {
        // Handle various date formats if necessary
        // Example: YYYY-MM-DD
        return new Date(dateString);
      }
      search() {
debugger;

const startDate = new Date(this.fromDate.toString());
const endDate = new Date(this.toDate.toString());
        // const searchParams = {
        //     fromdate: this.convertToDate(this.fromDate.toString()),
        //     todate: this.convertToDate(this.toDate.toString())
        //   };
        this.timeSheetSvc.getTimesheetwithSearch(startDate, endDate).subscribe(
          data => {
            this.timeSheets = data;
          console.log(this.timeSheets);
  
          },
          error => {
            console.error('Error fetching timesheets', error);
          }
        );
      }
    openNew() {
        this.getWeeks();
        this.timesheet = this.defaultTimesheet;
        this.submitted = false;
        this.timesheetDialog = true;
    }

    // deleteSelectedProducts() {
    //     this.confirmationService.confirm({
    //         message: 'Are you sure you want to delete the selected products?',
    //         header: 'Confirm',
    //         icon: 'pi pi-exclamation-triangle',
    //         accept: () => {
    //             this.products = this.products.filter(val => !this.selectedProducts.includes(val));
    //             this.selectedProducts = null;
    //             this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
    //         }
    //     });
    // }

    editProduct(_timesheet: Timesheets) {

        debugger;
        this.timesheet = {..._timesheet};
        this.timesheetDialog = true;
    }

    // deleteProduct(product: Product) {
    //     this.confirmationService.confirm({
    //         message: 'Are you sure you want to delete ' + product.name + '?',
    //         header: 'Confirm',
    //         icon: 'pi pi-exclamation-triangle',
    //         accept: () => {
    //             this.products = this.products.filter(val => val.id !== product.id);
    //             this.product = {};
    //             this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
    //         }
    //     });
    // }

    hideDialog() {
        this.timesheetDialog = false;
        this.submitted = false;
    }
    
    saveProduct() {
        this.submitted = true;

        if (this.timesheet?.project.trim()) {
            if (this.timesheet?.ID &&  this.timeSheets != undefined) {
                this.timeSheets[this.findIndexById(this.timesheet?.ID)] = this.timesheet;                
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
            }
            else {
                this.timesheet.ID = this.createId();
                // this.product.image = 'product-placeholder.svg';
                this.timeSheets?.push(this.timesheet);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
            }
            if(this.timeSheets != undefined)
            this.timeSheets = [...this.timeSheets];

            this.timesheetDialog = false;
            this.timesheet = this.defaultTimesheet;
        }
    }

    findIndexById(id: number): number {
        let index = -1;

        if(this.timeSheets != undefined){
        for (let i = 0; i < this.timeSheets.length; i++) {
            if (this.timeSheets[i].ID === id) {
                index = i;
                break;
            }
        }
    }

        return index;
    }

    createId(): number {
        let id = 1;
        // var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        // for ( var i = 0; i < 5; i++ ) {
        //     id += chars.charAt(Math.floor(Math.random() * chars.length));
        // }
        return id;
    }

}
