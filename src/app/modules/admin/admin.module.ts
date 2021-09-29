import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { NotAuthorisedComponent } from './not-authorised/not-authorised.component';

@NgModule({
    declarations: [
        AdminComponent,
        LoginComponent,
        NotAuthorisedComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule
    ]
})
export class AdminModule { }
