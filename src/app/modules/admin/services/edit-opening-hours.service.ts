import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { OpeningHours } from '../../shared/models/opening-hours';

@Injectable({
  providedIn: 'root'
})
export class EditOpeningHoursService {


    constructor(
        private afs: AngularFirestore
    ) { }

    editOpeningHours(openingHours) {
        const dbRef = this.afs.doc('opening-hours/days');
        dbRef.update(openingHours);
    }
}
