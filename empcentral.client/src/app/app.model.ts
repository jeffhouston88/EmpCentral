export class Address {
  Address1: string;
  Address2: string;
  City: string;
  State: String;
  Zip: number;

  constructor(
    public address1: string,
    public address2: string,
    public city: string,
    public state: string,
    public zip: number
  ) {
    this.Address1 = address1,
      this.Address2 = address2,
      this.City = city,
      this.State = state
    this.Zip = zip
  }
}


export class Contactdetails {
  PhoneMobile: number;
  PhoneHome: number;
  Phone2: number;
  Email: string;


  constructor(

    public phoneMobile: number,
    public phoneHome: number,
    public phone2: number,
    public email: string,

  ) {
    this.PhoneMobile = phoneMobile,
      this.PhoneHome = phoneHome,
      this.Phone2 = phone2,
      this.Email = email
  }
}


export class PersonalInfo {
  FirstName: string;
  LastName: string;
  MiddleName: string;
  LegalName: string;
  Id: number;
  IsActive: boolean;
  DateOfBirth: Date;



  constructor(

    firstName: string,
    lastName: string,
    middleName: string,
    legalName: string,
    id: number,
    isActive: boolean,
    dateOfbirth: Date

  ) {
    this.FirstName = firstName,
      this.MiddleName = middleName,
      this.LastName = lastName,
      this.LegalName = legalName,
      this.Id = id,
      this.IsActive = isActive,
      this.DateOfBirth = dateOfbirth

  }
}


export class Contact {
  PersonalInfo: PersonalInfo;
  ContactDetails: Contactdetails;
  AddressInformation: Address;
  StartDate: Date;
  EndDate: Date;
  IsSponsorshipRequired: boolean;
  ImmigrationStatus: string;

  constructor(
    personalinfo: PersonalInfo,
    contactdetails: Contactdetails,
    addressinfo: Address,
    startdate: Date,
    enddate: Date,
    isSponsorshipRequired: boolean,
    immigrationStatus: string

  ) {
    this.PersonalInfo = personalinfo;
    this.ContactDetails = contactdetails;
    this.AddressInformation = addressinfo;
    this.StartDate = startdate;
    this.EndDate = enddate;
    this.IsSponsorshipRequired = isSponsorshipRequired;
    this.ImmigrationStatus = immigrationStatus;
  }

}
