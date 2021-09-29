import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
// import { getAuth, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';
import { User } from '../../shared/models/user';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn: boolean;
    loggedInUser: any;
    user: User;

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private ngZone: NgZone
    ) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                const userJson = localStorage.getItem('user');
                this.loggedInUser = userJson ? JSON.parse(userJson) : null;
            } else {
                localStorage.setItem('user', '')
            }
        })
    }           

    login (email: string, password: string, returnUrl: string) {
        this.afAuth.signInWithEmailAndPassword(email, password)
            .then(res => {
                this.ngZone.run(() => {
                    if (res.user) {
                        this.user = {
                            uid: res.user.uid,
                            displayName: res.user.displayName || '',
                            email: res.user.email || ''
                        }
                    }
                    this.isLoggedIn = true;
                    this.router.navigate([returnUrl]);
                });                
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
        const lsUser = localStorage.getItem('user');
        if (lsUser || this.isLoggedIn) {
            return true;
        } else {
            return false
        }        
    }

    getLoggedInUser(): User | null
    {
        const lsUser = localStorage.getItem('user');
        if (lsUser) {
            const userJson = JSON.parse(lsUser);
            const user: User = {
                uid: userJson.uid,
                displayName: userJson.displayName,
                email: userJson.email
            }
            return user;
        } else {
            return this.user;
        }
    }

    // signInWithGoogle() {
    //     const auth = getAuth();
    //     const provider = new auth.GoogleAuthProvider();
    //     provider.addScope('profile');
    //     provider.addScope('email');
    //     auth().signInWithPopup(provider)
    //         .then(res => {

    //         })
    // }
}
