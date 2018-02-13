import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username = 'anjiuidev';
  private client_id = 'af43c8d7c589692cd1e0';
  private client_secret = 'dc6771604990caa523af727886980583a9211ffa';
  constructor(private http: Http) { 
    console.log("Github service Running")
   }


   getUsers(){
    return this.http.get(`https://api.github.com/users/${this.username}`)
    .map(res=> res.json());
  }

  getRepos(){
    return this.http.get(`https://api.github.com/users/${this.username}/repos`)
    .map(res=> res.json());
  }

  UpdateUser(username){
    this.username = username;
  }

}
