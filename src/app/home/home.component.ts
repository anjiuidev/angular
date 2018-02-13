import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listings:any;
  constructor(private _flashMessagesService: FlashMessagesService,private db: FirebaseService) {}

  ngOnInit() {
    this.db.getListing().subscribe(listings => {
      // console.log(listings)
      this.listings = listings;
    });


    this._flashMessagesService.show('We are in Home component!', { cssClass: 'alert-success' });
  }

}
