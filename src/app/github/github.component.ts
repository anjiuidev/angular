import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:any;
  repos:any;
  username:any;
  constructor(private githubservice: GithubService) {
    console.log("Github component started");
    this.githubservice.getUsers().subscribe(user=>{
      this.user = user;
      console.log(this.user)
    });
    this.githubservice.getRepos().subscribe(repos =>{
      this.repos = repos;
      console.log(this.repos)
    })
    
   }

   SearchUser(){
     this.githubservice.UpdateUser(this.username);
     this.githubservice.getUsers().subscribe(user=>{
      this.user = user;
      console.log(this.user)
    });
    this.githubservice.getRepos().subscribe(repos =>{
      this.repos = repos;
      console.log(this.repos)
    })
   }


  ngOnInit() {
  }

}
