import { NotePage } from './../../pages/note/note';
import { Component, Input, ViewChild } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, Nav, NavController } from 'ionic-angular';

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

  @Input() title: string;
  @Input() description: string;
  @ViewChild(Nav) nav: Nav;

  constructor(public platform: Platform, public navCtrl: NavController) {
    console.log('Hello NoteListComponent Component');
    this.title = 'Hello';
    this.description = 'Hello World';
  }

  goToNotes(){
    this.navCtrl.push(NotePage);
  }

}
