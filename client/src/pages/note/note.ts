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
  addCheckbox:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController, public  cameraProvider:CameraProvider,
    private noteProvider:NoteProvider) {
      this.note=navParams.data;
  }

  takePhoto(){
    this.cameraProvider.pictureFromCamera().then((res:any)=>{
      this.note.note_image_url = res;
      this.uploaded = true;
    }).catch((error) =>{
      alert(error);
    })
  }

  takeImage(){
    this.cameraProvider.pictureFromGallery().then((res:any)=>{
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
  
  deleteAlert(){
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
            this.noteProvider.deleteNote(this.note).subscribe((res:any) => {
            console.log('deleted');
              if (res.status==200){
                console.log(res);
                this.deleteToast();
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

  createToast(){
    let toast = this.toastCtrl.create({
      message: 'Guardado!',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() =>{
      console.log('dissmissed toast');
    });
    toast.present();
  }

  deleteToast(){
    let toast = this.toastCtrl.create({
      message: 'Eliminado!',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() =>{
      console.log('dissmissed toast');
    });
    toast.present();
  } 

  ionViewCanLeave(){
    console.log("willLeave");
    if (Object.keys(this.note).length !== 0){
        if (this.newNote){
          this.createNote();
        }else{
          console.log("updateNote");
          this.updateNote();
      }
    }    
    return true;
  }

  createNote(){
    this.noteProvider.createNote(this.note).subscribe((res:any) => {
      if (res.status==200){
        console.log("Created");
      }else{
        (this.alertCtrl.create({
          title: 'Error',
          subTitle: res.message,
          buttons: ['OK']
        })).present();
      }
    },
    (err) => {
      (this.alertCtrl.create({
        title: 'Error',
        subTitle: JSON.stringify(err),
        buttons: ['OK']
      })).present();          
    }
    );
  }

  updateNote(){
    this.noteProvider.updateNote(this.note).subscribe((res:any) => {
      if (res.status==200){
        console.log("Modified");
      }else{
        (this.alertCtrl.create({
          title: 'Error',
          subTitle: res.message,
          buttons: ['OK']
        })).present();
      }
    },
    (err) => {
      (this.alertCtrl.create({
        title: 'Error',
        subTitle: JSON.stringify(err),
        buttons: ['OK']
      })).present();
  });
  }
}
