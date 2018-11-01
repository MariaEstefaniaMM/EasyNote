import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UsersProvider {

  serverUrl:string = "http://192.168.43.31:3000";

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }
 

  createUser(user:User){
    return new Promise((resolve, reject) => {
      this.http.post(this.serverUrl+'/session/signup', user)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  login(user:User){
    return new Promise((resolve, reject) => {
      this.http.post(this.serverUrl+'/session/login', user)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
