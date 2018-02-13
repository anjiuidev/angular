import { Component, OnInit, AfterViewInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import * as d3 from "d3";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  error: any;
  public loading = false;
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) {}
  login() {
    this.loading = true;
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(success => {
        // this.router.navigate(["/listings"]);
        this._flashMessagesService.show("Logged in Successfully!", {
          cssClass: "alert-success"
        });
        this.loading = false;
      })
      .catch(err => {
        this.error = err;
        this._flashMessagesService.show(this.error, {
          cssClass: "alert-warning"
        });
        this.loading = false;
      });
  }
  logout() {
    this.loading = true;
    this.afAuth.auth
      .signOut()
      .then(success => {
        this.router.navigate(["/home"]);
        this._flashMessagesService.show("Logged Out Successfully!", {
          cssClass: "alert-success"
        });
        this.loading = false;
      })
      .catch(err => {
        this.error = err;
        this._flashMessagesService.show(this.error, {
          cssClass: "alert-warning"
        });
        this.loading = false;
      });
  }

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
  ngOnInit() {
  }

  
  private pieData = [
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
  private width: number;
  private height: number;
  private radius: number;
  private svg: any;
  private group: any;
  private arc: any;
  private pie: any;
  private arcvalues: any;
  private g: any;
  private arccolors: any;
  private dataSource : any;
  private themeNames: any;
  private currentCss: String;
  private stylesLink: any;

  ngAfterViewInit() {
    this.svg = d3.select(".theme-block").append('svg');
    this.width = 140;
    this.height = 140;
    this.radius = Math.min(this.width, this.height) / 2;
    this.svg.attr("width", this.width)
        .attr("height", this.height);
    this.group = this.svg.append("g")
        .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
        
    this.arc = d3.arc()
        .outerRadius(this.radius - 10)
        .innerRadius(0);

    this.pie = d3.pie()
        .sort(null)
        .value(function(d) {
            return d;
        });
    this.arcvalues = this.pieData.map(data => data.value);
    this.g = this.group.selectAll(".arc")
        .data(this.pie(this.arcvalues))
        .enter().append("g")
        .attr("class", "arc");

    this.arccolors = this.pieData.map(data => data.color);
    this.dataSource = this.pieData.map(data => data.cssfile);
    this.g.append("path")
        .attr("d", this.arc)
        .attr("data-source", (d,i)=>{
          return this.dataSource[i];
        })
        .style("fill", (d, i)=> {
            return this.arccolors[i];
        })
        .style("stroke", (d, i)=> {
            return this.arccolors[i];
        })
        .style("stroke-width", "0.3")
        .style("cursor", "pointer");


    this.stylesLink = document.querySelector("#stylesLink");
    this.themeNames = document.querySelectorAll(".theme-block .arc path");
    this.themeNames.forEach(theme => {
      theme.addEventListener("click", e => {
        this.loading = true;
        this.themeNames.forEach(theme => {
          theme.classList.remove("active");
        });
        this.currentCss = theme.getAttribute("data-source");
        this.stylesLink.setAttribute("href", this.currentCss);
        theme.classList.add("active");
        setTimeout(()=>{
          this.loading = false;
        },1000) 
      });
    });

  }


  // themePop
  showpopup = true;
  themePop(){
    this.showpopup = !this.showpopup;
  }

}
