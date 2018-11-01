import { UserProvider } from './../user/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './../../models/note';

@Injectable()
export class NoteProvider {

  serverUrl:string = "http://192.168.43.54:3000";
  

  constructor(public http: HttpClient, private userProvider: UserProvider) {
    console.log('Hello NoteProvider Provider');
  }

  headers = new HttpHeaders().set("Authorization", "Bearer "+ this.userProvider.token);

  createNote(note:Note){
    return new Promise((resolve, reject) => {
      this.http.post(this.serverUrl+'/note/createNote', note, {headers:this.headers})
        .subscribe((res:any) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateNote(note:Note){
    return new Promise((resolve, reject) => {
      this.http.put(this.serverUrl+'/note/updateNote', note, {headers:this.headers})
        .subscribe((res:any) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteNote(note_id){
    return new Promise((resolve, reject) => {
      this.http.put(this.serverUrl+'/note/deleteNote', note_id, {headers:this.headers})
        .subscribe((res:any) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getUserNotes = () =>{
    console.log(this.userProvider.token);
    return new Promise((resolve, reject) => {
      this.http.get(this.serverUrl+'/note/getUserNotes', {headers:this.headers})
        .subscribe((res:any) => {
          console.log(res.notes);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
