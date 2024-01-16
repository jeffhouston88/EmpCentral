import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpContactComponent } from './emp-contact.component';

describe('EmpContactComponent', () => {
  let component: EmpContactComponent;
  let fixture: ComponentFixture<EmpContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
