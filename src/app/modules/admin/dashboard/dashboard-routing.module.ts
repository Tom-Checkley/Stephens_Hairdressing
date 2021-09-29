import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorisedUsersComponent } from './components/authorised-users/authorised-users.component';
import { DashboardLandingComponent } from './components/dashboard-landing/dashboard-landing.component';
import { EditOpeningHoursComponent } from './components/edit-opening-hours/edit-opening-hours.component';
import { EditPricesComponent } from './components/edit-prices/edit-prices.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '', 
        component: DashboardComponent,
        children: [
            { path: '', component: DashboardLandingComponent },
            { path: 'authorised-users', component: AuthorisedUsersComponent },
            { path: 'edit-opening-hours', component: EditOpeningHoursComponent },
            { path: 'edit-prices', component: EditPricesComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
