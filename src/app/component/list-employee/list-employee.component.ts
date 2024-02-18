import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { AddEmployeeModalComponent } from '../add-employee/add-employee.component';
import { MatDialog } from '@angular/material/dialog';
import { DetailEmployeeComponent } from '../detail-employee/detail-employee.component';


interface Employee {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
}

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employeeData: Employee[] = [];

  dataSource!: MatTableDataSource<Employee>
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'birthDate', 'group', 'action'];

  firstNameCheck: boolean = false;
  firstName= new FormControl('')
  emailCheck: boolean = false;
  email = new FormControl('')
  filteredValues = { username : '', firstName: '', lastName: '', email: '', birthDate: '', basicSalary:'', group: '', description:'' }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  )
  { this.dataSource = new MatTableDataSource(this.employeeData) }

  ngOnInit(): void {
    this.employeeData = this.generateDummyData(100)
    this.dataSource.data = this.employeeData;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource)

    this.firstName.valueChanges.subscribe((value)        => {
      this.filteredValues['firstName'] = value;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      });

      this.email.valueChanges.subscribe((value) => {
        this.filteredValues['email'] = value;
        this.dataSource.filter = JSON.stringify(this.filteredValues);
      });

    this.dataSource.filterPredicate = this.customFilterPredicate();
  }


  generateDummyData(count: number): Employee[] {
    const dummyData: Employee[] = [];

    for (let i = 1; i <= count; i++) {

      dummyData.push({
        username: `user${i}`,
        firstName: `First${i}`,
        lastName: `Last${i}`,
        email: `user${i}@example.com`,
        birthDate: new Date(1990,0,i+1),
        basicSalary: 50000 + i * 1000,
        status: i % 2 === 0 ? 'Active' : 'Inactive',
        group: `Group ${i % 5}`,
        description: `Description ${i}`
      });
    }

    return dummyData;
  }

  addEmployee() {
    const dialogRef = this.dialog.open(AddEmployeeModalComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeData.push(result);
        this.dataSource.data = this.employeeData;
      }
    });
  }

  detail(data: any) {
    const dialogRef = this.dialog.open(DetailEmployeeComponent, {
      data: { ...data },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {

        const index = this.dataSource.data.indexOf(data);
        this.dataSource.data[index] = result;
        this.dataSource.data = [...this.dataSource.data];
      }
    });
  }

  customFilterPredicate() {
    const customFilter = function(data:Employee, filter:string) :boolean {
      let searchString = JSON.parse(filter);
      let firstNameFound = data.firstName.toString().trim().indexOf(searchString.firstName) !== -1
      let emailFound = data.email.toString().trim().indexOf(searchString.email) !== -1
      console.log(searchString)
      if (searchString.topFilter) {
          return firstNameFound || emailFound
      } else {
          return firstNameFound && emailFound
      }
    }
    return customFilter;
  }


  edit(){
    Swal.fire({
      icon: 'success',
      title: 'Notifikasi.',
      text: 'Notifikasi Edit Employee'
    })
  }

  delete(){
    Swal.fire({
      icon: 'success',
      title: 'Notifikasi.',
      text: 'Notifikasi Delete Employee'
    })
  }





}
