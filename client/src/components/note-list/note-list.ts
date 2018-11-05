import { NotesListPage } from './../../pages/notes-list/notes-list';
import { NoteProvider } from './../../providers/note/note';
import { NotePage } from './../../pages/note/note';
import { Component, Input, ViewChild } from '@angular/core';
import { Platform, Nav, NavController,AlertController } from 'ionic-angular';
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

  constructor(public platform: Platform, public navCtrl: NavController, private alertCtrl: AlertController,
              private noteProvider: NoteProvider) {
    console.log('Hello NoteListComponent Component');
  }

  goToNotes(note){
    this.navCtrl.push(NotePage, note);
  }

  deleteAlert(note){
    const confirm = this.alertCtrl.create({
      title: 'Are you sure you want to delete this note?',
      buttons: [
        {
          text: 'CANCEL',
          handler: ()=>{
            console.log('CANCEL');
          }
        },
        {
          text: 'DELETE',
          handler: ()=>{
            this.noteProvider.deleteNote(note).subscribe((res:any) => {
              if (res.status==200){
                console.log(res);
                this.navCtrl.setRoot(NotesListPage);
            }else{
              (this.alertCtrl.create({
                title: 'Error',
                subTitle: res.message,
                buttons: ['OK']
              })).present();
            }
            }, (err) => {
              (this.alertCtrl.create({
                title: 'Error',
                subTitle: JSON.stringify(err),
                buttons: ['OK']
              })).present();          
            }
            );
          }
        }
      ]
    });
    confirm.present();
  }

}
