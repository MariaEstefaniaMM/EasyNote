import { NotesListPage } from './../../pages/notes-list/notes-list';
import { NoteProvider } from './../../providers/note/note';
import { NotePage } from './../../pages/note/note';
import { Component, Input, ViewChild } from '@angular/core';
import { Platform, Nav, NavController, AlertController, ToastController } from 'ionic-angular';
import { Note } from '../../models/note';

@Component({
  selector: 'note-list',
  templateUrl: 'note-list.html'
})
export class NoteListComponent {

  @Input() note: Note;
  @ViewChild(Nav) nav: Nav;

  constructor(public platform: Platform, public navCtrl: NavController, private alertCtrl: AlertController,
              private noteProvider: NoteProvider, public toastCtrl: ToastController) {
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
            this.deleteNote(note);
          }
        }
      ]
    });
    confirm.present();
  }

  deleteNote(note){
    this.noteProvider.deleteNote(note).subscribe((res:any) => {
      if (res.status==200){
        console.log(res);
        this.noteProvider.notes.splice(this.noteProvider.notes.indexOf(this.note),1);
        this.deleteToast();
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

  deleteToast(){
    let toast = this.toastCtrl.create({
      message: 'Deleted!',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() =>{
      console.log('dissmissed toast');
    });
    toast.present();
  }

}
