import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    user: User;

    constructor(public authService: AuthService) { }

    ngOnInit(): void {
        // this.authService.getLoggedInUser().subscribe(res => {

        // })
    }

}
