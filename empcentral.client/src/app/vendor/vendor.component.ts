import { Component } from '@angular/core';
import { Vendor } from './vendor.model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.css'
})
export class VendorComponent {

  datasource = new Array<Vendor>();
  vendor1 = new Vendor(1, "Vendor1", true);
  vendor2 = new Vendor(1, "Vendor1", true);

  ngOnInit(): void {
    this.datasource.push(this.vendor1);
    this.datasource.push(this.vendor2);
}
}
