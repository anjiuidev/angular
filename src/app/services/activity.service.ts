import { Injectable } from "@angular/core";
import { IActivity } from "../activity/activity.model";
import { SAVED_ACTIVITIES } from "../activity/activities";

@Injectable()
export class ActivityService {
  constructor() {}

  getActivities(): IActivity[] {
    return SAVED_ACTIVITIES.slice(0);
  }

  totalActivities(allActivities: IActivity[]) {
    return allActivities.length;
  }
  totalDistance(allActivities: IActivity[]) {
    let totalDistance = 0;
    for (var i = 0; i < allActivities.length; i++) {
      totalDistance += allActivities[i].distance;
    }
    return totalDistance;
  }
  firstDate(allActivities: IActivity[]) {
    let earlierDate = new Date("01/01/9999");
    for (var i = 0; i < allActivities.length; i++) {
      let currentDate = allActivities[i].date;
      if(currentDate < earlierDate){
        earlierDate = currentDate;
      }
    }
    return earlierDate;
  }
}
