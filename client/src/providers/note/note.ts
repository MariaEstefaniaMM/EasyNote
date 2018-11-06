import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './../../models/note';
import { TokenProvider } from '../token/token';

@Injectable()
export class NoteProvider {

  serverUrl:string = "http://localhost:3000";  

  constructor(public http: HttpClient, private tokenProvider: TokenProvider) {
    console.log("Provider Note");
  }

  headers = new HttpHeaders().set("Authorization", "Bearer "+ this.tokenProvider.token);

  createNote(note:Note){
      console.log("createNote", note, this.tokenProvider.token);
      return this.http.post(this.serverUrl+'/note/createNote', note, {headers:this.headers})
  }

  updateNote(note:Note){
    console.log("updateNote");
      return this.http.put(this.serverUrl+'/note/updateNote', note, {headers:this.headers});
  }

  deleteNote(note:Note){
    console.log("deleteNote", note);
      return this.http.post(this.serverUrl+'/note/deleteNote', note, {headers:this.headers})
  }

  getUserNotes() {
      return this.http.get(this.serverUrl+'/note/getUserNotes', {headers:this.headers});
  }

}
