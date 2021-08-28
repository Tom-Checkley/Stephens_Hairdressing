import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '', 
        component: AdminComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            // { path: 'dashboard', component: DashboardComponent },
            { path: 'login', component: LoginComponent },
            {
                path: 'dashboard', 
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
