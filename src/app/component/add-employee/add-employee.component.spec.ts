import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeModalComponent } from './add-employee.component';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeModalComponent;
  let fixture: ComponentFixture<AddEmployeeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
