import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FlashMessagesModule } from "angular2-flash-messages";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { FirebaseService } from "./services/firebase.service";
import { LoadingModule } from "ngx-loading";
import * as d3 from "d3";
import { HttpModule } from "@angular/http";
import { GithubService } from "./services/github.service";
import { TodosService } from "./services/todos.service";
import { GalleryService } from "./services/gallery.service";
import { FormsModule } from "@angular/forms";
import { ActivityService } from './services/activity.service';
import { MapService } from './services/map.service';
import { AgmCoreModule } from '@agm/core';
// import { NgxMasonryModule } from 'ngx-masonry';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ListingsComponent } from "./listings/listings.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SingleListingComponent } from "./single-listing/single-listing.component";
import { AddListingComponent } from "./add-listing/add-listing.component";
import { EditListingComponent } from "./edit-listing/edit-listing.component";
import { GithubComponent } from "./github/github.component";
import { TodosComponent } from "./todos/todos.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ImagedetailsComponent } from "./gallery/imagedetails/imagedetails.component";
import { ActivityComponent } from './activity/activity.component';
import { ActivitydetailsComponent } from './activity/activitydetails/activitydetails.component';
import { AgmComponent } from './agm/agm.component';
import { WeatherComponent } from './weather/weather.component';


const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB8i1cGhCdzKM3dJidAZN8PgIYZriCq-wQ",
    authDomain: "proplisting-16aef.firebaseapp.com",
    databaseURL: "https://proplisting-16aef.firebaseio.com",
    projectId: "proplisting-16aef",
    storageBucket: "proplisting-16aef.appspot.com",
    messagingSenderId: "1096782662339"
  }
};

const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "listings", component: ListingsComponent },
  { path: "addlisting", component: AddListingComponent },
  { path: "github", component: GithubComponent },
  { path: "todos", component: TodosComponent },
  {path: "gallery", component: GalleryComponent }, 
  {path: "gallery/:id", component: ImagedetailsComponent },
  {path: "activity", component: ActivityComponent }, 
  {path: "activity/:id", component: ActivitydetailsComponent },
  {path: "agm", component: AgmComponent },
  {path: "weather", component: WeatherComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    SingleListingComponent,
    AddListingComponent,
    EditListingComponent,
    GithubComponent,
    TodosComponent,
    GalleryComponent,
    ImagedetailsComponent,
    ActivityComponent,
    ActivitydetailsComponent,
    AgmComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    LoadingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCb9dMwcBLUtOjVv7o_N8P6NvDVr3EtbcI'
    })
  ],
  providers: [
    FirebaseService,
    AngularFireAuth,
    GithubService,
    TodosService,
    GalleryService,
    ActivityService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
