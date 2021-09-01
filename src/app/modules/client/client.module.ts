import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { OpeningHoursComponent } from './components/opening-hours/opening-hours.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LocationComponent } from './components/location/location.component';
import { ReviewsComponent } from './components/reviews/reviews.component';



@NgModule({
  declarations: [
    HomeComponent,
    OpeningHoursComponent,
    LocationComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsModule
  ],
  exports: [
      HomeComponent
  ]
})
export class ClientModule { }
