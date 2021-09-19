import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { DashboardLandingComponent } from './components/dashboard-landing/dashboard-landing.component';
import { EditOpeningHoursComponent } from './components/edit-opening-hours/edit-opening-hours.component';
import { EditPricesComponent } from './components/edit-prices/edit-prices.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavComponent,
    DashboardLandingComponent,
    EditOpeningHoursComponent,
    EditPricesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
