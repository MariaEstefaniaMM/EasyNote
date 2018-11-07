import { NoteProvider } from './../../providers/note/note';
import { Note } from './../../models/note';
import { NotesListPage } from './../notes-list/notes-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, ToastController } from 'ionic-angular';
import { CameraProvider } from './../../providers/camera/camera';

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})

export class NotePage {

  uploaded: boolean = false;
  note:Note;
  newNote: boolean = false;
  originalNote:Note;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController, public  cameraProvider:CameraProvider,
    private noteProvider:NoteProvider) {
      this.note=navParams.data;
      this.originalNote=JSON.parse(JSON.stringify(navParams.data));
  }

  chooseImage(){
    this.cameraProvider.choose().then((res:any)=>{
      this.note.note_image_url = res;
      this.uploaded = true;
    }).catch((error) =>{
      alert(error);
    })
  }

  ionViewDidLoad() {
    if (Object.keys(this.note).length === 0)
      this.newNote=true;
    console.log('ionViewDidLoad NotePage');
  }

  ionViewWillLeave(){
    console.log(this.originalNote);
    console.log(this.note);
    console.log(JSON.stringify(this.originalNote)!==JSON.stringify(this.note));
    console.log("willLeave");
    if (Object.keys(this.note).length !== 0){
        if (this.newNote){
          this.createNote();
        }else if(JSON.stringify(this.originalNote)!==JSON.stringify(this.note)){
          console.log("updateNote");
          this.updateNote();
        }
    }    
  }

  createNote(){
    this.noteProvider.createNote(this.note).subscribe((res:any) => {
      if (res.status==200){
        console.log("Created");
        console.log(new Date().toISOString());
        this.note.created_at=new Date().toISOString();
        this.noteProvider.notes.push(this.note);
        this.toast('Note created');
      }else{
        this.errorAlert(JSON.stringify(res.message));
      }
    },
    (err) => {
      this.errorAlert(JSON.stringify(err));         
    }
    );
  }

  updateNote(){
    this.noteProvider.updateNote(this.note).subscribe((res:any) => {
      if (res.status==200){
        console.log("Modified");
        this.note.updated_at=new Date().toISOString();
      }else{
        this.note=this.originalNote;
        this.errorAlert(JSON.stringify(res.message));
      }
    },
    (err) => {
      this.errorAlert(JSON.stringify(err)); 
  });
  }

  deleteNote(){
    this.noteProvider.deleteNote(this.note).subscribe((res:any) => {
      console.log('deleted');
        if (res.status==200){
          console.log(res);
          this.noteProvider.notes.splice(this.noteProvider.notes.indexOf(this.note),1);
          this.toast('Note deleted');
          this.navCtrl.setRoot(NotesListPage);
      }else{
        this.errorAlert(JSON.stringify(res.message));
      }
      }, (err) => {
        this.errorAlert(JSON.stringify(err));         
      }
      );
  }

  deleteAlert(){
    const confirm = this.alertCtrl.create({
      title: 'Are you sure you want to delete this note?',
      buttons: [
        {
          text: 'CANCEL',
          handler: ()=>{ console.log('CANCEL'); }
        },
        {
          text: 'DELETE',
          handler: ()=>{ this.deleteNote(); }
        }
      ]
    });
    confirm.present();
  }

  errorAlert(message){
    (this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    })).present();  
  }

  toast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.onDidDismiss(() =>{
      console.log('dissmissed toast');
    });
    toast.present();
  }

}
