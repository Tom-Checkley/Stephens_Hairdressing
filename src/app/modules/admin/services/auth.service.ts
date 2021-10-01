import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { User } from '../../shared/models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    authorisedUsers;
    user: User;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router,
        private ngZone: NgZone
    ) {
        this.afAuth.authState.subscribe(res => {
            if (!this.user) {
                localStorage.setItem('user', '');
            } else {
                localStorage.setItem('user', JSON.stringify(this.user));
            }
        });
        
    }           

    // login(email: string, password: string, returnUrl: string) {
    //     this.afAuth.signInWithEmailAndPassword(email, password)
    //         .then(res => {
    //             this.ngZone.run(() => {
    //                 if (res.user) {
    //                     this.user = res.user;
    //                 }
    //                 this.router.navigate([returnUrl]);
    //             });                
    //         }).catch(err => {
    //             console.error(err);
    //         });
    // }

    logout() {
        this.afAuth.signOut()
            .then(res => {
                this.router.navigate(['admin/login']);
            });
    }

    isLoggedInUser(): boolean {
        const lsUser = localStorage.getItem('user');
        if (lsUser && !this.user) {
            this.user = JSON.parse(lsUser);
        }
        if (this.user) {
            return true;
        } else {
            return false
        }
    }

    signInWithGoogle(returnUrl: string): void {
        
        this.getAuthorisedUserEmails()
            .subscribe(res => {
                this.authorisedUsers = res.payload.data();
                console.log(this.authorisedUsers);

                const provider = new firebase.auth.GoogleAuthProvider();
                provider.addScope('email');
                provider.addScope('profile');
                this.afAuth.signInWithPopup(provider)
                    .then(res => {
                        if (res.user) {
                            if (this.authorisedUsers.emails.indexOf(res.user.email) != -1) {
                                this.user = res.user;
                                localStorage.setItem('user', JSON.stringify(this.user));
                                this.router.navigate([returnUrl]);
                            } else {
                                this.router.navigate(['admin/not-authorised']);
                            }
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            });
    }

    addAuthorisedUserEmail(emails) {
        const dbRef = this.afs.doc('authorised-users/users');
        return dbRef.update(emails);
    }

    getAuthorisedUserEmails() {
        return this.afs.doc<[]>('authorised-users/users')
            .snapshotChanges();  
    }
}
