import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './../../models/note';
import { TokenProvider } from '../token/token';

@Injectable()
export class NoteProvider {

  serverUrl:string = "http://192.168.43.54:3000";
  

  constructor(public http: HttpClient, private tokenProvider: TokenProvider) {
    console.log('Hello NoteProvider Provider');
  }

  headers = new HttpHeaders().set("Authorization", "Bearer "+ this.tokenProvider.token);

  createNote(note){
      console.log("createNote", note);
      return this.http.post(this.serverUrl+'/note/createNote', note, {headers:this.headers})
  }

  updateNote(note:Note){
      this.http.put(this.serverUrl+'/note/updateNote', note, {headers:this.headers})
        .subscribe((res:any) => {
          return res;
    });
  }

  deleteNote(note_id){
      return this.http.put(this.serverUrl+'/note/deleteNote', note_id, {headers:this.headers})
  }

  getUserNotes = () =>{
    console.log(this.tokenProvider.token);
    return this.http.get(this.serverUrl+'/note/getUserNotes', {headers:this.headers})
  }
}
