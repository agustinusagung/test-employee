import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './component/login/login.component';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';


const routes: Routes = [
  {path: '', component:ListEmployeeComponent, canActivate:[AuthGuard], pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  // {path:'list', component:ListEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
