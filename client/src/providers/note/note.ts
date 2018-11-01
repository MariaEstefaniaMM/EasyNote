import { UsersProvider } from './../users/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './../../models/note';

@Injectable()
export class NoteProvider {

  serverUrl:string = "http://localhost:3000";
  

  constructor(public http: HttpClient, private usersProvider: UsersProvider) {
    console.log('Hello NoteProvider Provider');
  }

  headers = new HttpHeaders().set("Authorization", "Bearer "+ this.usersProvider.token);

  createNote(note:Note){
    return new Promise((resolve, reject) => {
      this.http.post(this.serverUrl+'/note/createNote', note)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateNote(note:Note){
    return new Promise((resolve, reject) => {
      this.http.put(this.serverUrl+'/note/updateNote', note)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteNote(note_id){
    return new Promise((resolve, reject) => {
      this.http.put(this.serverUrl+'/note/deleteNote', note_id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getUserNotes(){
    console.log(this.usersProvider.token);
    return new Promise((resolve, reject) => {
      this.http.get(this.serverUrl+'/note/getUserNotes', {headers:this.headers})
        .subscribe(res => {
          console.log(res.notes);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
