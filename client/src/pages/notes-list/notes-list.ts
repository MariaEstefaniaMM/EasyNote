import { Note } from './../../models/note';
import { NoteProvider } from './../../providers/note/note';
import { NotePage } from './../note/note';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notes-list',
  templateUrl: 'notes-list.html',
})
export class NotesListPage {

  public isSearchbarOpened = false;
  
  notes:Note [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteProvider: NoteProvider,
              private alertCtrl: AlertController) {
                console.log('constructor');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter NotesListPage');
    this.noteProvider.getUserNotes().subscribe((res:any) => {
      if (res.status==200){
      console.log(res.notes);
      this.notes=res.notes;
    }else{
      (this.alertCtrl.create({
        title: 'Error',
        subTitle: res.message,
        buttons: ['OK']
      })).present();
    }
  }), (err) => {
    (this.alertCtrl.create({
      title: 'Error',
      subTitle: JSON.stringify(err),
      buttons: ['OK']
    })).present();
  }
  }

    goToNewNotes() {
      this.navCtrl.push(NotePage, {});
      console.log("aqui");
    }
}
