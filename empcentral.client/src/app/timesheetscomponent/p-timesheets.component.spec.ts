import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTimesheetsComponent } from './p-timesheets.component';

describe('PTimesheetsComponent', () => {
  let component: PTimesheetsComponent;
  let fixture: ComponentFixture<PTimesheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PTimesheetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PTimesheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
