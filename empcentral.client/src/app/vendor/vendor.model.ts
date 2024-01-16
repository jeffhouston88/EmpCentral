export class Vendor {
  VendorID: number;
  IsActive: boolean
  VendorName: string;

  constructor(
    vendorID: number,
    vendorName: string,
    isActive: boolean

  ) {
    this.VendorID = vendorID;
    this.VendorName = vendorName;
    this.IsActive = isActive;
  }
}
