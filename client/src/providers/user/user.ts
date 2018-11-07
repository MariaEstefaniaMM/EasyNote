import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  serverUrl:string = "http://192.168.42.78:3000";
  public token:string;

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  createUser(user:User){
      return this.http.post(this.serverUrl+'/session/signup', user)
  }

  login(user){
      return this.http.post(this.serverUrl+'/session/login', user)
  }

  logout(user){
      return this.http.get(this.serverUrl+'/session/logout', user)
  }
}
