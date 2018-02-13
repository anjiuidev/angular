import { Component, OnInit } from '@angular/core';
import { WeatherItem } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherItems: WeatherItem;
  constructor() {
    this.weatherItems = new WeatherItem('London', 'Rainy', 15);
    this.weatherItems = new WeatherItem('Delhi', 'Sunny', 45);
   }

  ngOnInit() {
  }

}
