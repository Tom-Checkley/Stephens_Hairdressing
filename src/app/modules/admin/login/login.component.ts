import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;
    returnUrl: string;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
    }

    login() {
        this.authService.login(this.email, this.password, this.returnUrl)
    }

    googleLogin() {
        this.authService.signInWithGoogle()
    }

    logout() {
        this.authService.logout();
    }

}
