import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/client/components/home/home.component';
import { PricesComponent } from './modules/client/components/prices/prices.component';
import { ReviewsComponent } from './modules/client/components/reviews/reviews.component';

const routes: Routes = [
    { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
    { path: 'prices', component: PricesComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
