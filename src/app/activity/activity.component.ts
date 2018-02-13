import { Component, OnInit } from '@angular/core';
import { IActivity } from './activity.model';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities: IActivity[];
  totalActivities: number;
  totalDistance: number;
  firstDate: Date;
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this.activityService.getActivities();
    this.totalActivities = this.activityService.totalActivities(this.activities);
    this.totalDistance = this.activityService.totalDistance(this.activities);
    this.firstDate = this.activityService.firstDate(this.activities);
  }

}
