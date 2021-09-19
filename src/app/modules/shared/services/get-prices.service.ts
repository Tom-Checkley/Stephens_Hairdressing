import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class GetPricesService {

    constructor(
        private afs: AngularFirestore
    ) { }

    getPrices() {
        return this.afs.doc('prices/groups')
            .snapshotChanges();            
    }
}
