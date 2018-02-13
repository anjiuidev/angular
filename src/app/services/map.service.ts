import { Injectable } from "@angular/core";
import { IActivity } from "../activity/activity.model";
import { SAVED_ACTIVITIES } from "../activity/activities";
import { ActivityService } from "../services/activity.service";
import { environment } from "../../environments/environment";

var apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;
const defaultCoordinates: number[] = [51.505, -0.09];
const zoomSize: number = 10;
@Injectable()
export class MapService {

  getActivity(id){
    return SAVED_ACTIVITIES.slice(0).find(run => run.id == id);
  }

  plotActivity(id) {
    var mystyle = {
      color: "orange",
      weight: 5,
      opacity: 0.7
    };

    var mymap = L.map("map").setView(defaultCoordinates, zoomSize);

    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 28,
        id: "mapbox.satellite",
        accessToken: apiToken
      }
    ).addTo(mymap);

    var customLayer = L.geoJson(null, {
      style: mystyle
    });

    var layer = omnivore
      .gpx(SAVED_ACTIVITIES.slice(0).find(run => run.id == id).gpxData, null, customLayer)
      .on("ready", function() {
        mymap.fitBounds(layer.getBounds())
      })
      .addTo(mymap);
  }
  constructor() {}
}
