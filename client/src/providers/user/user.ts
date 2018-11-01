import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UserProvider {

<<<<<<< HEAD:client/src/providers/users/users.ts
  serverUrl:string = "http://192.168.43.31:3000";
=======
  serverUrl:string = "http://192.168.43.54:3000";
  public token:string;
>>>>>>> cf0b1f5707c3d661545a0d0f6fcd190108f6b123:client/src/providers/user/user.ts

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
