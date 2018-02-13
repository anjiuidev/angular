webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/activity/activities.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SAVED_ACTIVITIES; });
var SAVED_ACTIVITIES = [
    {
        "id": 1,
        "name": "Main Bike Trails",
        "date": new Date('06/01/2017'),
        "distance": 16.2,
        "comments": "Nice day, cool temps",
        "gpxData": '../../assets/gpx/1.gpx'
    },
    {
        "id": 2,
        "name": 'Industrial Park',
        "date": new Date('06/04/2017'),
        "gpxData": '../../assets/gpx/2.gpx',
        "distance": 1.2,
        "comments": 'Cool and windy.'
    },
    {
        "id": 3,
        "name": 'Forest Route',
        "date": new Date('06/05/2017'),
        "gpxData": '../../assets/gpx/3.gpx',
        "distance": 3.2,
        "comments": 'Evening run.'
    },
    {
        "id": 4,
        "name": 'Lake Shore',
        "date": new Date('06/08/2017'),
        "gpxData": '../../assets/gpx/4.gpx',
        "distance": 8.4,
        "comments": 'Cool and windy by the lake.'
    }
];


/***/ }),

/***/ "../../../../../src/app/activity/activity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>My Runs</h3>\n<h5> You've logged <strong>{{ totalDistance }}</strong> Total Miles over <strong>{{totalActivities}}</strong> since <strong>{{firstDate | date: 'longDate'}}</strong> </h5>\n<br>\n<table class=\"table table-hover table-bordered\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Comments</th>\n      <th>Date</th>\n      <th>Distance</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let activity of activities\" style=\"cursor:pointer;\" routerLink=\"{{activity.id}}\">\n      <td>{{activity.name}}</td>\n      <td>{{activity.comments}}</td>\n      <td>{{activity.date | date: 'yyyy-MM-dd'}}</td>\n      <td>{{activity.distance}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/activity/activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityComponent = (function () {
    function ActivityComponent(activityService) {
        this.activityService = activityService;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        this.activities = this.activityService.getActivities();
        this.totalActivities = this.activityService.totalActivities(this.activities);
        this.totalDistance = this.activityService.totalDistance(this.activities);
        this.firstDate = this.activityService.firstDate(this.activities);
    };
    ActivityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__("../../../../../src/app/activity/activity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity/activity.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_activity_service__["a" /* ActivityService */]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity/activitydetails/activitydetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-block {\r\n  padding: 25px;\r\n  background: #f7f7f7;\r\n}\r\n\r\n#map {\r\n  height: 400px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity/activitydetails/activitydetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map-block\">\n  <h3>\n    Map</h3>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <div id=\"map\"></div>\n    </div>\n    <div class=\"col-sm-4\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <strong>Activity Name :</strong> {{activityName}}\n        </li>\n        <li class=\"list-group-item\">\n          <strong>Activity Comments :</strong> {{activityComments}}\n        </li>\n        <li class=\"list-group-item\">\n          <strong>Activity Date :</strong> {{activityDate | date : 'longDate'}}\n        </li>\n        <li class=\"list-group-item\">\n          <strong>Activity Distance :</strong> {{activityDistance}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/activity/activitydetails/activitydetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitydetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_map_service__ = __webpack_require__("../../../../../src/app/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { IActivity } from "../activity.model";
// import { ActivityService } from "../../services/activity.service";


var ActivitydetailsComponent = (function () {
    function ActivitydetailsComponent(
        // private activityService: ActivityService,
        route, mapService) {
        this.route = route;
        this.mapService = mapService;
    }
    ActivitydetailsComponent.prototype.ngOnInit = function () {
        this.activity = this.mapService.getActivity(this.route.snapshot.params.id);
        this.activityName = this.activity.name;
        this.activityComments = this.activity.comments;
        this.activityDate = this.activity.date;
        this.activityDistance = this.activity.distance;
        this.mapService.plotActivity(this.route.snapshot.params.id);
    };
    ActivitydetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-activitydetails",
            template: __webpack_require__("../../../../../src/app/activity/activitydetails/activitydetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity/activitydetails/activitydetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* MapService */]])
    ], ActivitydetailsComponent);
    return ActivitydetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-listing/add-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-listing/add-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add-listing works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/add-listing/add-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddListingComponent = (function () {
    function AddListingComponent() {
    }
    AddListingComponent.prototype.ngOnInit = function () {
    };
    AddListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-listing',
            template: __webpack_require__("../../../../../src/app/add-listing/add-listing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-listing/add-listing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddListingComponent);
    return AddListingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agm/agm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n  height: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agm/agm.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Angular Google Maps</h3>\n<br>\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\" (mapClick)=\"chooseLocation($event)\">\n  <agm-marker *ngFor=\"let marker of markers; let i = index;\" (markerClick)=\"clickedMarker(marker.name,i)\" [markerDraggable]=\"marker.draggable\" (dragEnd)=\"markerDragEnd(marker, $event)\" [latitude]=\"marker.lat\" [longitude]=\"marker.lng\">\n      <agm-info-window><strong (blur)=\"editmapTitle(marker.name,i)\" contenteditable=\"true\">{{marker.name}}</strong></agm-info-window>\n  </agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "../../../../../src/app/agm/agm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgmComponent = (function () {
    function AgmComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.zoom = 8;
        this.markers = [
            {
                "name": 'Comapny One',
                "lat": 51.673858,
                "lng": 7.815982,
                "draggable": true
            },
            {
                "name": 'Comapny Two',
                "lat": 51.373858,
                "lng": 7.815982,
                "draggable": true
            },
            {
                "name": 'Comapny Three',
                "lat": 51.723858,
                "lng": 7.895982,
                "draggable": true
            }
        ];
    }
    AgmComponent.prototype.ngOnInit = function () {
    };
    AgmComponent.prototype.chooseLocation = function (event) {
        var marker = {
            "name": "Untitled",
            "lat": this.lat,
            "lng": this.lng,
            "draggable": true
        };
        this.markers.push(marker);
    };
    AgmComponent.prototype.markerDragEnd = function (marker, event) {
        console.log("Dragend :", marker, event);
    };
    AgmComponent.prototype.clickedMarker = function (marker, i) {
        console.log("Clicked Marker: ", marker, i);
        var updMarker = {
            "name": marker.name,
            "lat": marker.lat,
            "lng": marker.lng,
            "draggable": true
        };
    };
    AgmComponent.prototype.editmapTitle = function (markerName, i) {
        console.log(markerName, i);
    };
    AgmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agm',
            template: __webpack_require__("../../../../../src/app/agm/agm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/agm/agm.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgmComponent);
    return AgmComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<flash-messages></flash-messages>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_github_service__ = __webpack_require__("../../../../../src/app/services/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_todos_service__ = __webpack_require__("../../../../../src/app/services/todos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_activity_service__ = __webpack_require__("../../../../../src/app/services/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_map_service__ = __webpack_require__("../../../../../src/app/services/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__listings_listings_component__ = __webpack_require__("../../../../../src/app/listings/listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__single_listing_single_listing_component__ = __webpack_require__("../../../../../src/app/single-listing/single-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__add_listing_add_listing_component__ = __webpack_require__("../../../../../src/app/add-listing/add-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__edit_listing_edit_listing_component__ = __webpack_require__("../../../../../src/app/edit-listing/edit-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__github_github_component__ = __webpack_require__("../../../../../src/app/github/github.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__todos_todos_component__ = __webpack_require__("../../../../../src/app/todos/todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__gallery_imagedetails_imagedetails_component__ = __webpack_require__("../../../../../src/app/gallery/imagedetails/imagedetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__activity_activity_component__ = __webpack_require__("../../../../../src/app/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__activity_activitydetails_activitydetails_component__ = __webpack_require__("../../../../../src/app/activity/activitydetails/activitydetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__agm_agm_component__ = __webpack_require__("../../../../../src/app/agm/agm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { NgxMasonryModule } from 'ngx-masonry';















var environment = {
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
var appRoutes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */] },
    { path: "listings", component: __WEBPACK_IMPORTED_MODULE_19__listings_listings_component__["a" /* ListingsComponent */] },
    { path: "addlisting", component: __WEBPACK_IMPORTED_MODULE_22__add_listing_add_listing_component__["a" /* AddListingComponent */] },
    { path: "github", component: __WEBPACK_IMPORTED_MODULE_24__github_github_component__["a" /* GithubComponent */] },
    { path: "todos", component: __WEBPACK_IMPORTED_MODULE_25__todos_todos_component__["a" /* TodosComponent */] },
    { path: "gallery", component: __WEBPACK_IMPORTED_MODULE_26__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: "gallery/:id", component: __WEBPACK_IMPORTED_MODULE_27__gallery_imagedetails_imagedetails_component__["a" /* ImagedetailsComponent */] },
    { path: "activity", component: __WEBPACK_IMPORTED_MODULE_28__activity_activity_component__["a" /* ActivityComponent */] },
    { path: "activity/:id", component: __WEBPACK_IMPORTED_MODULE_29__activity_activitydetails_activitydetails_component__["a" /* ActivitydetailsComponent */] },
    { path: "agm", component: __WEBPACK_IMPORTED_MODULE_30__agm_agm_component__["a" /* AgmComponent */] },
    { path: "weather", component: __WEBPACK_IMPORTED_MODULE_31__weather_weather_component__["a" /* WeatherComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__listings_listings_component__["a" /* ListingsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__single_listing_single_listing_component__["a" /* SingleListingComponent */],
                __WEBPACK_IMPORTED_MODULE_22__add_listing_add_listing_component__["a" /* AddListingComponent */],
                __WEBPACK_IMPORTED_MODULE_23__edit_listing_edit_listing_component__["a" /* EditListingComponent */],
                __WEBPACK_IMPORTED_MODULE_24__github_github_component__["a" /* GithubComponent */],
                __WEBPACK_IMPORTED_MODULE_25__todos_todos_component__["a" /* TodosComponent */],
                __WEBPACK_IMPORTED_MODULE_26__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_27__gallery_imagedetails_imagedetails_component__["a" /* ImagedetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__activity_activity_component__["a" /* ActivityComponent */],
                __WEBPACK_IMPORTED_MODULE_29__activity_activitydetails_activitydetails_component__["a" /* ActivitydetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__agm_agm_component__["a" /* AgmComponent */],
                __WEBPACK_IMPORTED_MODULE_31__weather_weather_component__["a" /* WeatherComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(environment.firebase),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_loading__["a" /* LoadingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_16__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCb9dMwcBLUtOjVv7o_N8P6NvDVr3EtbcI'
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_firebase_service__["a" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_10__services_github_service__["a" /* GithubService */],
                __WEBPACK_IMPORTED_MODULE_11__services_todos_service__["a" /* TodosService */],
                __WEBPACK_IMPORTED_MODULE_12__services_gallery_service__["a" /* GalleryService */],
                __WEBPACK_IMPORTED_MODULE_14__services_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_15__services_map_service__["a" /* MapService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/edit-listing/edit-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-listing/edit-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-listing works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/edit-listing/edit-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditListingComponent = (function () {
    function EditListingComponent() {
    }
    EditListingComponent.prototype.ngOnInit = function () {
    };
    EditListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-listing',
            template: __webpack_require__("../../../../../src/app/edit-listing/edit-listing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-listing/edit-listing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditListingComponent);
    return EditListingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".breadcrumb .active {\r\n  color: #333;\r\n  pointer-events: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Images Gallery</h3>\n<br>\n<div class=\"row\">\n  <div class=\"col-sm-3\" *ngFor=\"let image of Images\" style=\"margin-bottom: 20px; cursor:pointer;\">\n    <a class=\"card\" routerLink=\"{{image.id}}\">\n      <img class=\"card-img-top\" [src]=\"image.url\" class=\"img-thumbnail\" alt=\"{{image.caption}}\">\n      <h5 style=\"margin:5px; text-align:center;\">{{image.caption}}</h5>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = (function () {
    function GalleryComponent(galleryService) {
        this.galleryService = galleryService;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.Images = this.galleryService.getImages();
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/imagedetails/imagedetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/imagedetails/imagedetails.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-info pull-right text-white\" (click)=\"goBack()\">Go Back</a>\n<h3>Image Details</h3>\n<br>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\"><strong>Name: </strong>{{singleImage.caption}}</h5>\n    <p class=\"card-text\"><strong>Category: </strong>{{singleImage.category}}</p>\n  </div>\n  <img class=\"card-img-top\" [src]=\"singleImage.url\" alt=\"singleImage.caption\">\n</div>\n<br>"

/***/ }),

/***/ "../../../../../src/app/gallery/imagedetails/imagedetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagedetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImagedetailsComponent = (function () {
    function ImagedetailsComponent(galleryService, route, location) {
        this.galleryService = galleryService;
        this.route = route;
        this.location = location;
    }
    ImagedetailsComponent.prototype.ngOnInit = function () {
        this.Images = this.galleryService.getImages();
        this.imageId = this.route.snapshot.params.id;
        this.singleImage = this.galleryService.getSingleImage(this.imageId)[0];
        // this.singleImage = this.Images.filter(image => image.id == this.imageId);    
    };
    ImagedetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ImagedetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-imagedetails',
            template: __webpack_require__("../../../../../src/app/gallery/imagedetails/imagedetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gallery/imagedetails/imagedetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]])
    ], ImagedetailsComponent);
    return ImagedetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/github/github.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/github/github.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"card-header\" style=\"margin-bottom:25px;\">\n  <input type=\"search\" placeholder=\"Search for Git User\" [(ngModel)]=\"username\" class=\"form-control\" name=\"username\" (keyup)=\"SearchUser()\">\n</form>\n<div *ngIf=\"user\">\n  <div class=\"card border-primary mb-3\">\n    <div class=\"card-header\">\n      <h3>{{user.login}}</h3>\n    </div>\n    <div class=\"card-body text-primary\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <img [src]=\"user.avatar_url\" [alt]=\"user.login\" class=\"img-fluid rounded\" style=\"padding:5px; border:1px solid #ccc;\">\n        </div>\n        <div class=\"col-md-9\">\n          <div class=\"status\" style=\"margin-bottom:20px;\">\n            <span class=\"badge badge-primary\">{{user.public_repos}} Public Repos</span>\n            <span class=\"badge badge-success\">{{user.public_gists}} Public Gists</span>\n            <span class=\"badge badge-info\">{{user.followers}} Followers</span>\n            <span class=\"badge badge-warning\">{{user.following}} Following</span>\n            <span class=\"badge badge-danger\">{{user.type}} Type</span>\n          </div>\n          <div class=\"list-group\">\n            <a class=\"list-group-item list-group-item-action\">\n              <strong>Username:</strong> {{user.login}}\n            </a>\n            <a class=\"list-group-item list-group-item-action\">\n              <strong>Location:</strong> {{user.location}}\n            </a>\n            <a class=\"list-group-item list-group-item-action\">\n              <strong>Email:</strong> {{user.email}}\n            </a>\n            <a class=\"list-group-item list-group-item-action\">\n              <strong>Blog:</strong> {{user.blog}}\n            </a>\n            <a class=\"list-group-item list-group-item-action\">\n              <strong>Member Since:</strong> {{user.created_at}}\n            </a>\n            <a class=\"list-group-item list-group-item-action\">\n              <strong>Site Admin:</strong> {{user.site_admin}}\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"repos\">\n  <div class=\"card border-primary mb-3\">\n    <div class=\"card-header\">\n      <h3>Repos</h3>\n    </div>\n    <div class=\"card-body text-primary\">\n      <div *ngFor=\"let repo of repos\">\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <h4><a [href]=\"repo.html_url\" target=\"_blank\">{{repo.name}}</a></h4>\n          <p>{{repo.description}}</p>\n        </div>\n        <div class=\"col-md-3\">\n          <span class=\"badge badge-primary\">{{repo.watchers}} Watchers</span>\n          <span class=\"badge badge-primary\">{{repo.forks}} Forks</span>\n        </div>\n      </div>\n      <hr>\n    </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/github/github.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_github_service__ = __webpack_require__("../../../../../src/app/services/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GithubComponent = (function () {
    function GithubComponent(githubservice) {
        var _this = this;
        this.githubservice = githubservice;
        console.log("Github component started");
        this.githubservice.getUsers().subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
        this.githubservice.getRepos().subscribe(function (repos) {
            _this.repos = repos;
            console.log(_this.repos);
        });
    }
    GithubComponent.prototype.SearchUser = function () {
        var _this = this;
        this.githubservice.UpdateUser(this.username);
        this.githubservice.getUsers().subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
        this.githubservice.getRepos().subscribe(function (repos) {
            _this.repos = repos;
            console.log(_this.repos);
        });
    };
    GithubComponent.prototype.ngOnInit = function () {
    };
    GithubComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-github',
            template: __webpack_require__("../../../../../src/app/github/github.component.html"),
            styles: [__webpack_require__("../../../../../src/app/github/github.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */]])
    ], GithubComponent);
    return GithubComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Property Listings</h1>\n  <p>Access the Hottest Properties available</p>\n  <a routerLink=\"/login\" class=\"btn btn-warning\">Login with Google</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(_flashMessagesService, db) {
        this._flashMessagesService = _flashMessagesService;
        this.db = db;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.getListing().subscribe(function (listings) {
            // console.log(listings)
            _this.listings = listings;
        });
        this._flashMessagesService.show('We are in Home component!', { cssClass: 'alert-success' });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/listings/listings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  listings works!\n</p>\n{{listings}}\n<ul>\n    <li class=\"text\" *ngFor=\"let listing of listings | async\">\n      {{listing.title}}\n    </li>\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListingsComponent = (function () {
    function ListingsComponent(db, dba) {
        this.db = db;
        this.dba = dba;
        this.listings = dba.collection('items').valueChanges();
        // .map((response: Response) => {
        //   return <any[]>response.json();
        // })
        // console.log(typeof(this.listings));
    }
    ListingsComponent.prototype.ngOnInit = function () {
        // this.db.getListing().subscribe(listings => {
        //   console.log(listings)
        //   this.listings = listings;
        // });
    };
    ListingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__("../../../../../src/app/listings/listings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ListingsComponent);
    return ListingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"navbar-brand\">Property Listings</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"afAuth.authState | async as user;\">\n          <a class=\"nav-link\" routerLink=\"/listings\">Listings</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"afAuth.authState | async as user;\">\n          <a class=\"nav-link\" routerLink=\"/addlisting\">Add Listing</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/github\">GitHub</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/todos\">Todos</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/gallery\">Gallery</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/activity\">Activity</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/agm\">Maps</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/weather\">Weather</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <ng-template #showLogin>\n            <a class=\"nav-link\" (click)=\"login()\">Login</a>\n          </ng-template>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"afAuth.authState | async as user; else showLogin\">\n          <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!-- <div class=\"card bg-light mb-3\" style=\"max-width: 10rem; position:fixed; top: 50%; transform:translateY(-50%)\">\n    <div class=\"card-header\">Change Theme</div>\n      <div class=\"list-group\">\n        <a data-source=\"https://bootswatch.com/4/cosmo/bootstrap.min.css\" class=\"list-group-item list-group-item-action active\">Cosmo</a>\n        <a data-source=\"https://bootswatch.com/4/slate/bootstrap.min.css\" class=\"list-group-item list-group-item-action\">Slate</a>\n        <a data-source=\"https://bootswatch.com/4/simplex/bootstrap.min.css\" class=\"list-group-item list-group-item-action\">Simplex</a>\n        <a data-source=\"https://bootswatch.com/4/litera/bootstrap.min.css\" class=\"list-group-item list-group-item-action\">Litera</a>\n        <a data-source=\"https://bootswatch.com/4/solar/bootstrap.min.css\" class=\"list-group-item list-group-item-action\">Solar</a>\n      </div>\n  </div> -->\n\n<div class=\"theme-wrap\" style=\"position:fixed; left:0; top:50%; transform: translateY(-50%); z-index:99; background: #ddd; padding: 10px; text-align:center;\">\n  <button class=\"btn btn-success\" (click)=\"themePop()\">Change Theme</button>\n  <div class=\"theme-block\" [hidden]=\"showpopup\"></div>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(afAuth, router, _flashMessagesService) {
        this.afAuth = afAuth;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
        this.loading = false;
        this.pieData = [
            {
                label: "data1",
                value: 1,
                color: "#f6eb39",
                cssfile: "https://bootswatch.com/4/cosmo/bootstrap.min.css"
            },
            {
                label: "data2",
                value: 1,
                color: "#f8ba15",
                cssfile: "https://bootswatch.com/4/simplex/bootstrap.min.css"
            },
            {
                label: "data3",
                value: 1,
                color: "#f8991d",
                cssfile: "https://bootswatch.com/4/slate/bootstrap.min.css"
            },
            {
                label: "data4",
                value: 1,
                color: "#ef5522",
                cssfile: "https://bootswatch.com/4/solar/bootstrap.min.css"
            },
            {
                label: "data5",
                value: 1,
                color: "#ec3323",
                cssfile: "https://bootswatch.com/4/cosmo/bootstrap.min.css"
            },
            {
                label: "data6",
                value: 1,
                color: "#a61d4b",
                cssfile: "https://bootswatch.com/4/simplex/bootstrap.min.css"
            },
            {
                label: "data7",
                value: 1,
                color: "#7c3692",
                cssfile: "https://bootswatch.com/4/slate/bootstrap.min.css"
            },
            {
                label: "data8",
                value: 1,
                color: "#462e90",
                cssfile: "https://bootswatch.com/4/solar/bootstrap.min.css"
            },
            {
                label: "data9",
                value: 1,
                color: "#3e5ca9",
                cssfile: "https://bootswatch.com/4/cosmo/bootstrap.min.css"
            },
            {
                label: "data10",
                value: 1,
                color: "#0791cc",
                cssfile: "https://bootswatch.com/4/simplex/bootstrap.min.css"
            },
            {
                label: "data11",
                value: 1,
                color: "#64ad45",
                cssfile: "https://bootswatch.com/4/slate/bootstrap.min.css"
            },
            {
                label: "data12",
                value: 1,
                color: "#cddc39",
                cssfile: "https://bootswatch.com/4/solar/bootstrap.min.css"
            }
        ];
        // themePop
        this.showpopup = true;
    }
    NavbarComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (success) {
            // this.router.navigate(["/listings"]);
            _this._flashMessagesService.show("Logged in Successfully!", {
                cssClass: "alert-success"
            });
            _this.loading = false;
        })
            .catch(function (err) {
            _this.error = err;
            _this._flashMessagesService.show(_this.error, {
                cssClass: "alert-warning"
            });
            _this.loading = false;
        });
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.loading = true;
        this.afAuth.auth
            .signOut()
            .then(function (success) {
            _this.router.navigate(["/home"]);
            _this._flashMessagesService.show("Logged Out Successfully!", {
                cssClass: "alert-success"
            });
            _this.loading = false;
        })
            .catch(function (err) {
            _this.error = err;
            _this._flashMessagesService.show(_this.error, {
                cssClass: "alert-warning"
            });
            _this.loading = false;
        });
    };
    // themeNames: any;
    // currentCss: String;
    // stylesLink: any;
    // ngOnInit() {
    //   this.stylesLink = document.querySelector("#stylesLink");
    //   this.themeNames = document.querySelectorAll(".list-group a");
    //   this.themeNames.forEach(theme => {
    //     theme.addEventListener("click", e => {
    //       //this.loading = true;
    //       this.themeNames.forEach(theme => {
    //         theme.classList.remove("active");
    //       });
    //       this.currentCss = theme.getAttribute("data-source");
    //       this.stylesLink.setAttribute("href", this.currentCss);
    //       theme.classList.add("active");
    //       //setTimeout(()=>{
    //       //this.loading = false;
    //       //},2000)
    //     });
    //   });
    // }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.svg = __WEBPACK_IMPORTED_MODULE_5_d3__["c" /* select */](".theme-block").append('svg');
        this.width = 140;
        this.height = 140;
        this.radius = Math.min(this.width, this.height) / 2;
        this.svg.attr("width", this.width)
            .attr("height", this.height);
        this.group = this.svg.append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
        this.arc = __WEBPACK_IMPORTED_MODULE_5_d3__["a" /* arc */]()
            .outerRadius(this.radius - 10)
            .innerRadius(0);
        this.pie = __WEBPACK_IMPORTED_MODULE_5_d3__["b" /* pie */]()
            .sort(null)
            .value(function (d) {
            return d;
        });
        this.arcvalues = this.pieData.map(function (data) { return data.value; });
        this.g = this.group.selectAll(".arc")
            .data(this.pie(this.arcvalues))
            .enter().append("g")
            .attr("class", "arc");
        this.arccolors = this.pieData.map(function (data) { return data.color; });
        this.dataSource = this.pieData.map(function (data) { return data.cssfile; });
        this.g.append("path")
            .attr("d", this.arc)
            .attr("data-source", function (d, i) {
            return _this.dataSource[i];
        })
            .style("fill", function (d, i) {
            return _this.arccolors[i];
        })
            .style("stroke", function (d, i) {
            return _this.arccolors[i];
        })
            .style("stroke-width", "0.3")
            .style("cursor", "pointer");
        this.stylesLink = document.querySelector("#stylesLink");
        this.themeNames = document.querySelectorAll(".theme-block .arc path");
        this.themeNames.forEach(function (theme) {
            theme.addEventListener("click", function (e) {
                _this.loading = true;
                _this.themeNames.forEach(function (theme) {
                    theme.classList.remove("active");
                });
                _this.currentCss = theme.getAttribute("data-source");
                _this.stylesLink.setAttribute("href", _this.currentCss);
                theme.classList.add("active");
                setTimeout(function () {
                    _this.loading = false;
                }, 1000);
            });
        });
    };
    NavbarComponent.prototype.themePop = function () {
        this.showpopup = !this.showpopup;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/activity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_activities__ = __webpack_require__("../../../../../src/app/activity/activities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = (function () {
    function ActivityService() {
    }
    ActivityService.prototype.getActivities = function () {
        return __WEBPACK_IMPORTED_MODULE_1__activity_activities__["a" /* SAVED_ACTIVITIES */].slice(0);
    };
    ActivityService.prototype.totalActivities = function (allActivities) {
        return allActivities.length;
    };
    ActivityService.prototype.totalDistance = function (allActivities) {
        var totalDistance = 0;
        for (var i = 0; i < allActivities.length; i++) {
            totalDistance += allActivities[i].distance;
        }
        return totalDistance;
    };
    ActivityService.prototype.firstDate = function (allActivities) {
        var earlierDate = new Date("01/01/9999");
        for (var i = 0; i < allActivities.length; i++) {
            var currentDate = allActivities[i].date;
            if (currentDate < earlierDate) {
                earlierDate = currentDate;
            }
        }
        return earlierDate;
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "../../../../../src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getListing = function () {
        // this.listings = this.db.collection('listings').valueChanges() as Observable<Listing[]>;
        this.listings = this.db.collection('listings').valueChanges();
        return this.listings;
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "../../../../../src/app/services/gallery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryService = (function () {
    function GalleryService() {
        this.Images = [
            {
                id: 1,
                category: "boats",
                caption: "View from the boat",
                url: "assets/img/boat_01.jpeg"
            },
            {
                id: 2,
                category: "boats",
                caption: "Sailing the coast",
                url: "assets/img/boat_02.jpeg"
            },
            {
                id: 3,
                category: "boats",
                caption: "The water was nice",
                url: "assets/img/boat_03.jpeg"
            },
            {
                id: 4,
                category: "boats",
                caption: "Cool water cavern",
                url: "assets/img/boat_04.jpeg"
            },
            {
                id: 5,
                category: "boats",
                caption: "Sunset at the docks",
                url: "assets/img/boat_05.jpeg"
            },
            {
                id: 6,
                category: "camping",
                caption: "Camping Trip '17'",
                url: "assets/img/camping_01.jpeg"
            },
            {
                id: 7,
                category: "camping",
                caption: "Kim and Jessie",
                url: "assets/img/camping_02.jpeg"
            },
            {
                id: 8,
                category: "camping",
                caption: "View from the top",
                url: "assets/img/camping_03.jpeg"
            },
            {
                id: 9,
                category: "camping",
                caption: "On the trail",
                url: "assets/img/camping_04.jpg"
            },
            {
                id: 10,
                category: "camping",
                caption: "Our camping spot",
                url: "assets/img/camping_05.jpeg"
            },
            {
                id: 11,
                category: "camping",
                caption: "RV Life",
                url: "assets/img/camping_06.jpg"
            },
            {
                id: 12,
                category: "camping",
                caption: "Hiking trip 2017",
                url: "assets/img/camping_07.jpeg"
            },
            {
                id: 13,
                category: "library",
                caption: "Big library",
                url: "assets/img/library_01.jpeg"
            },
            {
                id: 14,
                category: "library",
                caption: "Stacks",
                url: "assets/img/library_02.jpeg"
            },
            {
                id: 15,
                category: "library",
                caption: "Saturday afternoon",
                url: "assets/img/library_03.jpeg"
            },
            {
                id: 16,
                category: "library",
                caption: "Local library",
                url: "assets/img/library_04.jpeg"
            },
            {
                id: 17,
                category: "library",
                caption: "Nice library",
                url: "assets/img/library_05.jpeg"
            }
        ];
    }
    GalleryService.prototype.getImages = function () {
        this.allImages = this.Images;
        return this.allImages;
    };
    GalleryService.prototype.getSingleImage = function (id) {
        return this.Images.filter(function (image) { return image.id == id; });
    };
    GalleryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "../../../../../src/app/services/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubService = (function () {
    function GithubService(http) {
        this.http = http;
        this.username = 'anjiuidev';
        this.client_id = 'af43c8d7c589692cd1e0';
        this.client_secret = 'dc6771604990caa523af727886980583a9211ffa';
        console.log("Github service Running");
    }
    GithubService.prototype.getUsers = function () {
        return this.http.get("https://api.github.com/users/" + this.username)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.getRepos = function () {
        return this.http.get("https://api.github.com/users/" + this.username + "/repos")
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.UpdateUser = function (username) {
        this.username = username;
    };
    GithubService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "../../../../../src/app/services/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_activities__ = __webpack_require__("../../../../../src/app/activity/activities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiToken = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].MAPBOX_API_KEY;
var defaultCoordinates = [51.505, -0.09];
var zoomSize = 10;
var MapService = (function () {
    function MapService() {
    }
    MapService.prototype.getActivity = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1__activity_activities__["a" /* SAVED_ACTIVITIES */].slice(0).find(function (run) { return run.id == id; });
    };
    MapService.prototype.plotActivity = function (id) {
        var mystyle = {
            color: "orange",
            weight: 5,
            opacity: 0.7
        };
        var mymap = L.map("map").setView(defaultCoordinates, zoomSize);
        L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 28,
            id: "mapbox.satellite",
            accessToken: apiToken
        }).addTo(mymap);
        var customLayer = L.geoJson(null, {
            style: mystyle
        });
        var layer = omnivore
            .gpx(__WEBPACK_IMPORTED_MODULE_1__activity_activities__["a" /* SAVED_ACTIVITIES */].slice(0).find(function (run) { return run.id == id; }).gpxData, null, customLayer)
            .on("ready", function () {
            mymap.fitBounds(layer.getBounds());
        })
            .addTo(mymap);
    };
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "../../../../../src/app/services/todos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodosService = (function () {
    function TodosService() {
    }
    TodosService.prototype.getTodos = function () {
        // alert(localStorage.getItem("todos"))
        if (localStorage.getItem("todos") === null ||
            localStorage.getItem("todos") === '[]' ||
            localStorage.getItem("todos") === undefined) {
            console.log("No todos Found ... Initialising Default Todos....");
            var todos = [
                {
                    text: "wake up Early Morning"
                },
                {
                    text: "Go to the Class"
                },
                {
                    text: "Go to office"
                }
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
        else {
            console.log("Todos Found ... Getting Todos From LocalStorage....");
            var todos = JSON.parse(localStorage.getItem("todos"));
            return todos;
        }
    };
    TodosService.prototype.addTodo = function (todo) {
        var todos = JSON.parse(localStorage.getItem("todos"));
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodosService.prototype.deleteTodo = function (todoText) {
        var todos = JSON.parse(localStorage.getItem("todos"));
        // for(let i =0; i<todos.length; i++){
        //   if(todos[i].text === todoText){
        //     todos.splice(i,1);
        //     break;
        //   }
        // }
        todos = todos.filter(function (todo) { return todo.text != todoText; });
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodosService.prototype.updateTodo = function (oldText, newText) {
        var todos = JSON.parse(localStorage.getItem("todos"));
        // for(let i =0; i<todos.length; i++){
        //   if(todos[i].text === oldText){
        //     todos[i].text = newText;
        //     break;
        //   }
        // }
        todos = todos.filter(function (todo) { return (todo.text === oldText) ? (todo.text = newText) : todo.text; });
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    TodosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TodosService);
    return TodosService;
}());



/***/ }),

/***/ "../../../../../src/app/single-listing/single-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/single-listing/single-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  single-listing works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/single-listing/single-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleListingComponent = (function () {
    function SingleListingComponent() {
    }
    SingleListingComponent.prototype.ngOnInit = function () {
    };
    SingleListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-single-listing',
            template: __webpack_require__("../../../../../src/app/single-listing/single-listing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/single-listing/single-listing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleListingComponent);
    return SingleListingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todos/todos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todos/todos.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!editmode\">\n  <h3>Add Todo</h3>\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todo\" name=\"todo\" (keyup.enter)=\"addTodo()\">\n</div>\n<div *ngIf=\"editmode\">\n  <h3>Edit Todo</h3>\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todo\" name=\"todo\" (keyup.enter)=\"updateTodo()\">\n</div>\n<br>\n<br>\n<h3>Todos List</h3>\n<ul class=\"list-group\" *ngFor=\"let todo of todos\">\n  <li class=\"list-group-item list-group-item-action\">{{todo.text}}\n    <div class=\"pull-right\">\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"deleteTodo(todo.text)\">Delete</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"editTodo(todo.text)\">Edit</button>\n    </div>\n  </li>\n</ul>\n<br>\n<br>\n"

/***/ }),

/***/ "../../../../../src/app/todos/todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todos_service__ = __webpack_require__("../../../../../src/app/services/todos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodosComponent = (function () {
    function TodosComponent(_flashMessagesService, todoservice) {
        this._flashMessagesService = _flashMessagesService;
        this.todoservice = todoservice;
        this.editmode = false;
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.todos = this.todoservice.getTodos();
    };
    TodosComponent.prototype.addTodo = function () {
        var newTodo = {
            text: this.todo
        };
        this.todoservice.addTodo(newTodo);
        this.todos.push(newTodo);
        this._flashMessagesService.show('Added Todo Successfully! Todo name is ' + this.todo, { cssClass: 'alert-success' });
        this.todo = "";
    };
    TodosComponent.prototype.deleteTodo = function (todoText) {
        // for(let i =0; i<this.todos.length; i++){
        //   if(this.todos[i].text === todoText){
        //     this.todos.splice(i,1);
        //     break;
        //   }
        // }
        this.todos = this.todos.filter(function (todo) { return todo.text != todoText; });
        this.todoservice.deleteTodo(todoText);
        this._flashMessagesService.show('Deleted Todo Successfully! Todo name is ' + todoText, { cssClass: 'alert-success' });
    };
    TodosComponent.prototype.editTodo = function (todoText) {
        this.editmode = !this.editmode;
        this.oldText = todoText;
        this.todo = todoText;
    };
    TodosComponent.prototype.updateTodo = function () {
        var _this = this;
        // for(let i=0; i<this.todos.length; i++){
        //   if(this.todos[i].text === this.oldText){
        //     this.todos[i].text = this.todo;
        //   }
        // }
        //debugger;
        this.todos = this.todos.filter(function (todo) { return (todo.text === _this.oldText) ? (todo.text = _this.todo) : todo.text; });
        this.todoservice.updateTodo(this.oldText, this.todo);
        this._flashMessagesService.show('Updated Todo Successfully! Todo name is ' + this.todo, { cssClass: 'alert-success' });
        this.todo = "";
        this.editmode = !this.editmode;
    };
    TodosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__("../../../../../src/app/todos/todos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todos/todos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_1__services_todos_service__["a" /* TodosService */]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Angular Weather</h3>\n<br>\n<div class=\"row\">\n  <div class=\"col-sm-4 col-md-3\"></div>\n  <div class=\"col-sm-3 col-md-9\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let weatherItem of weatherItems\">\n        <h4><strong>City:</strong> {{weatherItem.city}} <span class=\"pull-right\"><strong>Temperature: </strong> {{weatherItem.temp}}<sup>o</sup>C</span></h4>\n        <p><strong>Info: </strong>{{weatherItem.info}}</p>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather__ = __webpack_require__("../../../../../src/app/weather/weather.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = (function () {
    function WeatherComponent() {
        this.weatherItems = new __WEBPACK_IMPORTED_MODULE_1__weather__["a" /* WeatherItem */]('London', 'Rainy', 15);
        this.weatherItems = new __WEBPACK_IMPORTED_MODULE_1__weather__["a" /* WeatherItem */]('Delhi', 'Sunny', 45);
    }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__("../../../../../src/app/weather/weather.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weather/weather.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherItem; });
var WeatherItem = (function () {
    function WeatherItem(city, info, temp) {
        this.city = city;
        this.info = info;
        this.temp = temp;
    }
    return WeatherItem;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    MAPBOX_API_KEY: 'pk.eyJ1IjoiYW5qaTQwNyIsImEiOiJjamQwODM1enUyMXo1MzNxb29jNGNpN2tyIn0.rcMq8LcuiPFnh650AabeRA'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map