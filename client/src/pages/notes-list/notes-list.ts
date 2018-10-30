import { NotePage } from './../note/note';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notes-list',
  templateUrl: 'notes-list.html',
})
export class NotesListPage {

  public isSearchbarOpened = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToNewNotes() {
    this.navCtrl.push(NotePage);
    console.log("aqui");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesListPage');
  }

}
