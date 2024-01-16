import { Component } from '@angular/core';
import { Contact, PersonalInfo, Address, Contactdetails } from '../../app.model';

@Component({
  selector: 'app-emp-contact',
  templateUrl: './emp-contact.component.html',
  styleUrl: './emp-contact.component.css'
})
export class EmpContactComponent {


  personalInfo = new PersonalInfo('Sai', 'minnekanti', '', 'sai Minnekanti', 1, false, new Date(2024, 1, 1));
  conDetails = new Contactdetails(1234567890, 12345, 1234567890, 'test@test.com');
  add = new Address('addressline1', '', 'testcity', 'ny', 11746);

  datasource = new Contact(this.personalInfo, this.conDetails, this.add, new Date(2024, 1, 1), new Date(2024, 1, 1), false, 'GC');
}
