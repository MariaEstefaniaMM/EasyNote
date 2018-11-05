import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  serverUrl:string = "http://192.168.0.101:3000";
  public token:string;

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  createUser(user:User){
    return new Promise((resolve, reject) => {
      this.http.post(this.serverUrl+'/session/signup', user)
        .subscribe((res:any) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  login(user:User){
    return new Promise((resolve, reject) => {
      this.http.post(this.serverUrl+'/session/login', user)
        .subscribe((res:any) => {
            this.token=res.token;
            console.log(this.token);
            resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
