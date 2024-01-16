export class Contract {
  ContractID: number;
  VendorID: number;
  StartDate: Date;
  EndDate: Date;
  VendorChargeRate: number;
  EmployeePayRate: number;
  IsActive: Boolean;

  constructor(
    contractid: number,
    vendorID: number,
    startDate: Date,
    endDate: Date,
    vendorChargeRate: number,
    employeepayRate: number,
    isActive: boolean

  ) {
    this.ContractID = contractid;
    this.VendorID = vendorID;
    this.StartDate = startDate;
    this.EndDate = endDate;
    this.VendorChargeRate = vendorChargeRate;
    this.EmployeePayRate = employeepayRate;
    this.IsActive = isActive;

  };



}
