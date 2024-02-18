import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
})
export class DetailEmployeeComponent {
  detailForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DetailEmployeeComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.detailForm = this.fb.group({
      username: [{value: data.username, disabled: true}],
      firstName: [{value: data.firstName, disabled: true}],
      lastName: [{value: data.lastName, disabled: true}],
      email: [{value: data.email, disabled: true}],
      birthDate: [{value: data.birthDate, disabled: true}],
      basicSalary: [{value: this.formatCurrency(data.basicSalary), disabled: true}],
      status: [{value: data.status, disabled: true}],
      group: [{value: data.group, disabled: true}],
      description: [{value: data.description, disabled: true}]
    });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
  }

  close() {
    this.dialogRef.close();
  }
}
