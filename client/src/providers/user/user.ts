import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

<<<<<<< HEAD
  serverUrl:string = "http://192.168.0.101:3000";
  public token:string;
=======
  serverUrl:string = "http://192.168.43.54:3000";
>>>>>>> 770782325c286808bb5c6c6fda8a7b1faad2d048

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  createUser(user:User){
      return this.http.post(this.serverUrl+'/session/signup', user)
  }

  login(user){
      return this.http.post(this.serverUrl+'/session/login', user)
  }
}
