import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/app/modules/shared/models/user';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-dashboard-nav',
    templateUrl: './dashboard-nav.component.html',
    styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent implements OnInit {
    subnavOpen: boolean;
    user: User | null;

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.user = this.authService.getLoggedInUser();
    }

    logout() {
        this.authService.logout();
    }

}
