import { Component, OnInit, Input } from '@angular/core';
// import { Product } from '../../app/model/';
// import { ProductService } from '../../../../app/services/product.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { TimesheetService } from '../../app/services/timesheet.service';
import { Timesheets } from '../../app/model/Timesheets/timesheetmodal';

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
    timesheetDialog: boolean = false;
    timeSheets: Timesheets[] =[ ];
    timesheet: Timesheets ={ID:0, project:"", Vendor:"", status:"", recordedHours:0, periodStarting:"", periodEnding:""};
    selectedtimeSheet: Timesheets[] = [];

     defaultTimesheet: Timesheets = {
        ID: 0,
        project: "",
        Vendor: "",
        status: "",
        recordedHours  :0,
        periodStarting: "",
        periodEnding: ""
      };

    submitted: boolean = false;

    constructor(private timeSheetSvc:TimesheetService , private messageService: MessageService, private confirmationService: ConfirmationService) { }

    ngOnInit() {
       // this.productService.getProducts().then(data => this.products = data);
       this.getTimesheets();

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

    openNew() {
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
