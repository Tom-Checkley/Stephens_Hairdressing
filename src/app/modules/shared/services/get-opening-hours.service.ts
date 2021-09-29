import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})
export class GetOpeningHoursService {

    constructor(
        private afs: AngularFirestore
    ) { }

    getOpeningHours() {
        return this.afs.doc('opening-hours/days')
            .snapshotChanges();            
    }
}
