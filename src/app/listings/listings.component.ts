import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings:Observable<any[]>;
  constructor(private db: FirebaseService, private dba: AngularFirestore) { 
    this.listings = dba.collection('items').valueChanges()
    // .map((response: Response) => {
    //   return <any[]>response.json();
    // })
    // console.log(typeof(this.listings));
  }

  ngOnInit() {
    // this.db.getListing().subscribe(listings => {
    //   console.log(listings)
    //   this.listings = listings;
    // });
  }

}
