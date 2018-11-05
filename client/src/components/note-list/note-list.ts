import { NotePage } from './../../pages/note/note';
import { Component, Input, ViewChild } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, Nav, NavController } from 'ionic-angular';
import { Note } from '../../models/note';

/**
 * Generated class for the NoteListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'note-list',
  templateUrl: 'note-list.html'
})
export class NoteListComponent {

  @Input() note: Note;
  @ViewChild(Nav) nav: Nav;

  constructor(public platform: Platform, public navCtrl: NavController) {
    console.log('Hello NoteListComponent Component');
  }

  goToNotes(note){
    this.navCtrl.push(NotePage, note);
  }

}
