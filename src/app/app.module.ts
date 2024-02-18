import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
    MatCommonModule,
    MatNativeDateModule,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { AddEmployeeModalComponent } from './component/add-employee/add-employee.component';
import { DetailEmployeeComponent } from './component/detail-employee/detail-employee.component';
import { CurrencyMaskDirective } from './component/currency-mask.directive';
import { OnlyNumberDirective } from './component/only-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    LoginComponent,
    AddEmployeeModalComponent,
    DetailEmployeeComponent,
    CurrencyMaskDirective,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    CommonModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTooltipModule,
    NgxSpinnerModule,
  ],
  exports: [CurrencyMaskDirective],
  providers: [
    DatePipe
],
  bootstrap: [AppComponent]
})
export class AppModule { }
