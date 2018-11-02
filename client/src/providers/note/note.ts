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
      this.http.post(this.serverUrl+'/note/createNote', note, {headers:this.headers})
        .subscribe((res:any) => {
          return res;
    });
  }

  updateNote(note:Note){
      this.http.put(this.serverUrl+'/note/updateNote', note, {headers:this.headers})
        .subscribe((res:any) => {
          return res;
    });
  }

  deleteNote(note_id){
      this.http.put(this.serverUrl+'/note/deleteNote', note_id, {headers:this.headers})
        .subscribe((res:any) => {
          return res;
    });
  }

  getUserNotes = () =>{
    console.log(this.userProvider.token);
      this.http.get(this.serverUrl+'/note/getUserNotes', {headers:this.headers})
        .subscribe((res:any) => {
          console.log(res.notes);
          return res;
    });
  }
}
