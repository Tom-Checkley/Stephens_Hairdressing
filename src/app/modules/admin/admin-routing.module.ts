import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AuthGuard } from './guards/auth.guard';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotAuthorisedComponent } from './not-authorised/not-authorised.component';

const routes: Routes = [
    {
        path: '', 
        component: AdminComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'login', component: LoginComponent },
            { path: 'not-authorised', component: NotAuthorisedComponent },
            {
                path: 'dashboard',
                canActivate: [AuthGuard],
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
