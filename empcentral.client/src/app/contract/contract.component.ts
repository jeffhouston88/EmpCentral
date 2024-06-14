import { Component } from '@angular/core';
import { Contract } from './contract.model'
import { Contact } from '../app.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.css'
})
export class ContractComponent {

  //datasource: Contract;
  //datasource = new Array<Contract>();
  datasource: any[] =[];
  Vendors: any[] =[];
  datasource1 = new Contract(1, 1, new Date(2024, 1, 1), new Date(2024, 12, 30), 45.50, 45.50, true);
  datasource2 = new Contract(1, 2, new Date(2024, 1, 1), new Date(2024, 12, 30), 45.50, 45.50, true);



  ngOnInit(): void {

    // this.datasource.push(this.datasource1);
    // this.datasource.push(this.datasource2);
    //this.Vendors = [{ id: 1, name: 'Vendor1' }, { id: 2, name: 'Vendor2' },];
    this.Vendors = [
      { label: 'Vendor1', value: { id: 1, name: 'Vendor1' } },
      { label: 'Vendor2', value: { id: 2, name: 'Vendor2' } }
    ];

    this.datasource =
      [
        {
          ContractID: 1,
          VendorID: { id: 1, name: "Vendor1" },
          StartDate: new Date(2024, 1, 1),
          EndDate: new Date(2024, 1, 1),
          VendorChargeRate: 45, EmployeePayRate: 40,
          IsActive: true
        },
        {
          ContractID: 2,
          VendorID: { id: 2, name: "Vendor2" },
          StartDate: new Date(2024, 1, 1),
          EndDate: new Date(2024, 1, 1),
          VendorChargeRate: 45, EmployeePayRate: 40,
          IsActive: true
        }
      ];
  }


  translate(value: number): string {
    if (value === 1) {
      return 'yes';
    } else if (value === 0) {
      return 'no';
    }
    return '';
  }
}
