import { Component, OnInit,Output,EventEmitter } from "@angular/core";
// import { IActivity } from "../activity.model";
// import { ActivityService } from "../../services/activity.service";
import { MapService } from "../../services/map.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-activitydetails",
  templateUrl: "./activitydetails.component.html",
  styleUrls: ["./activitydetails.component.css"]
})
export class ActivitydetailsComponent implements OnInit {
  activity: any;
  activityName: string;
  activityComments: string;
  activityDate: Date;
  activityDistance: string;
  
  constructor(
    // private activityService: ActivityService,
    private route: ActivatedRoute,
    private mapService:MapService
  ) {}

  ngOnInit() {
    this.activity = this.mapService.getActivity(this.route.snapshot.params.id);
    this.activityName = this.activity.name; 
    this.activityComments = this.activity.comments;
    this.activityDate = this.activity.date;
    this.activityDistance = this.activity.distance;
    this.mapService.plotActivity(this.route.snapshot.params.id);
  }
}
