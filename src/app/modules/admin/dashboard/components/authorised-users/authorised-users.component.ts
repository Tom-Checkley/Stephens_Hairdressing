import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-authorised-users',
    templateUrl: './authorised-users.component.html',
    styleUrls: ['./authorised-users.component.scss']
})
export class AuthorisedUsersComponent implements OnInit {
    authorisedUsers;
    inputEmail: string;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.getAuthorisedUserEmails()
            .subscribe(res => {
                if (res.payload.data()) {
                    this.authorisedUsers = res.payload.data()
                } else {
                    this.authorisedUsers = [];
                }
                console.log(this.authorisedUsers);
            })
    }

    addAuthorisedUser() {
        this.authorisedUsers.emails.push(this.inputEmail);
        this.authService.addAuthorisedUserEmail(this.authorisedUsers);
    }

}
