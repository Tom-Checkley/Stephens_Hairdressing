import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { OpeningHours } from '../../shared/models/opening-hours';

@Injectable({
    providedIn: 'root'
})
export class EditOpeningHoursService {


    constructor(
        private afs: AngularFirestore
    ) { }

    editOpeningHours(openingHours): Promise<any> {
        const dbRef = this.afs.doc('opening-hours/days');
        return dbRef.update(openingHours);
    }
}
