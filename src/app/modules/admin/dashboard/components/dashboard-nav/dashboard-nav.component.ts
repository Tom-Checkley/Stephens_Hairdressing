import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-dashboard-nav',
    templateUrl: './dashboard-nav.component.html',
    styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent implements OnInit {
    subnavOpen: boolean;
    user: any;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.loggedInUser;
    }

    logout() {
        this.authService.logout();
    }

}
