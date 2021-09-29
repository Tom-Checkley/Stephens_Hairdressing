import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Prices } from '../../shared/models/prices';

@Injectable({
  providedIn: 'root'
})
export class EditPricesService {

  constructor(
      private afs: AngularFirestore
  ) { }

  editPrices(prices: Prices) {
      const dbRef = this.afs.doc('prices/groups');
      return dbRef.update(prices);
  }
}
