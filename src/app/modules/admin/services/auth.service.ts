import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { User } from '../../shared/models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn: boolean;
    loggedInUser: any;

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router
    ) { }           

    login (email: string, password: string, returnUrl: string) {
        this.afAuth.signInWithEmailAndPassword(email, password)
            .then(res => {
                this.isLoggedIn = true;
                this.router.navigate([returnUrl]);
                
            }).catch(err => {
                console.error(err);
            });
    }

    logout () {
        this.afAuth.signOut()
            .then(res => {
                this.isLoggedIn = false;
                this.router.navigate(['admin/login']);
            })
    }

    isLoggedInUser() {
        return this.afAuth.authState.pipe(first());
    }

    getLoggedInUser()
    {
        return this.isLoggedInUser().pipe(
            tap(user => {
                if (user) {
                    this.loggedInUser = user;
                } else {
                    this.loggedInUser = null;
                }
            })
        );
    }
}
