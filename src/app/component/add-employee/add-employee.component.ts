import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';

interface groupData {
  value: string,
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeModalComponent implements OnInit {
  employeeForm: FormGroup;

  listGroup: groupData[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddEmployeeModalComponent>,
    private formBuilder: FormBuilder
  ) {
    this.employeeForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
      status: [{value: 'Active', disabled:true}],
    });
  }
  ngOnInit(): void {
    this.listGroup = this.generateDummyData(10)
  }

  generateDummyData(count: number): groupData[] {
    const dummyData: groupData[] = [];

    for (let i = 1; i <= count; i++) {
      dummyData.push({
        value: `Group ${i}`,
      });
    }

    return dummyData;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  addEmployee(): void {
    console.log(this.employeeForm)
    if (this.employeeForm.valid) {
      this.dialogRef.close(this.employeeForm.value);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Mandatory field'
      })
    }
  }

  dateValidator(): ValidatorFn {
    return(control: AbstractControl): {[key: string]:any} | null => {
      if (Validators.required(control) !== null) {
        return null;
      }

      const date = moment(control.value, 'MM/DD/YYYY', true);

      if (!date.isValid()) {
        return { 'invalidDateFormat': { value: control.value } };
      }
      return null
    }
  }
}
