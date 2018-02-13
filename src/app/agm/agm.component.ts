import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.css']
})
export class AgmComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom = 8;

  constructor() { }

  ngOnInit() {
  }

  markers: Marker[] = [
    {
      "name":'Comapny One',
      "lat": 51.673858,
		  "lng": 7.815982,
      "draggable": true
    },
    {
      "name":'Comapny Two',
      "lat": 51.373858,
		  "lng": 7.815982,
      "draggable": true
    },
    {
      "name":'Comapny Three',
      "lat": 51.723858,
		  "lng": 7.895982,
      "draggable": true
    }
  ]

  chooseLocation(event){
    var marker = {
      "name": "Untitled",
      "lat":this.lat,
      "lng":this.lng,
      "draggable": true
    }
    this.markers.push(marker);
  }

  markerDragEnd(marker, event){
    console.log("Dragend :" , marker,  event);
  }
  clickedMarker(marker,i){
    console.log("Clicked Marker: ", marker , i);
    var updMarker = {
      "name": marker.name,
      "lat":marker.lat,
      "lng":marker.lng,
      "draggable": true
    }
  }

  editmapTitle(markerName,i){
    
    console.log(markerName,i)
  }

}


interface Marker {
  name?:string;
  lat:number;
  lng:number;
  draggable:boolean
}