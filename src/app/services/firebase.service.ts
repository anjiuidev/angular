import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {

  listings: Observable<any[]>;
  constructor(private db: AngularFirestore) {
  }
  getListing(){
    // this.listings = this.db.collection('listings').valueChanges() as Observable<Listing[]>;
    this.listings = this.db.collection('listings').valueChanges();
    return this.listings;
  }

} 

interface Listing{
  $key?:string;
  $title?:string;
  $type?:string;
  $image?:string;
  $city?:string;
  $owner?:string;
  $bedrooms?:string;
}