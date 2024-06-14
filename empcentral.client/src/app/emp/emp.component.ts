import { Component, OnInit } from '@angular/core';
import { Contact, PersonalInfo, Address, Contactdetails } from '../app.model';
import { FormControl, FormGroup, NgForm } from '@angular/forms';



@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
  maxDate: Date = new Date();
  personalInfo = new PersonalInfo('Sai', 'minnekanti', '', 'sai Minnekanti', 1, false, new Date(2024, 1, 1));
  conDetails = new Contactdetails(1234567890, 12345, 1234567890, 'test@test.com');
  add = new Address('addressline1', '', 'testcity', 'ny', 11746);

  datasource = new Contact(this.personalInfo, this.conDetails, this.add, new Date(2024, 1, 1), new Date(2024, 1, 1), false, 'GC');

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(''),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      legalName: new FormControl(''),
      dob: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      isActive: new FormControl(false),
      isSponsorRequired: new FormControl(false),
    });
    this.maxDate = new Date();
  }

  onSave() {
    console.log(this.contactForm.value);
  }

  onCancel() {
    this.contactForm.reset();
  }

}
