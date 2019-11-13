import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_helpers/auth.guard';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' },
    { path:'searchcustomers', component:EmployeeComponent, canActivate: [AuthGuard]}
];

export const appRoutingModule = RouterModule.forRoot(routes);