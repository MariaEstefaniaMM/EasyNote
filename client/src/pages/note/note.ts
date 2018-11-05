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

  imageUrl: '';
  uploaded: boolean = false;
  note:Note;
  newNote: boolean;
  addCheckbox:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController, public  cameraProvider:CameraProvider,
    private noteProvider:NoteProvider) {
      this.note=navParams.data; 
      console.log(this.note);
  }

  addCheckboxs(){
    this.addCheckbox = !this.addCheckbox;
  }

  takePhoto(){
    this.cameraProvider.pictureFromCamera().then((res:any)=>{
      this.imageUrl = res;
      this.uploaded = true;
    }).catch((error) =>{
      alert(error);
    })
  }

  takeImage(){
    this.cameraProvider.pictureFromGallery().then((res:any)=>{
      this.imageUrl = res;
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
            console.log('deleted');
            this.deleteToast();
            this.noteProvider.deleteNote(this.note.note_id).subscribe((res:any) => {
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
    if (Object.keys(this.note).length !== 0)
        if (this.newNote){
          console.log("newNote");
          this.noteProvider.createNote(this.note).subscribe((res:any) => {
            if (res.status==200){
                console.log(res);
                return true;
                //this.navCtrl.setRoot(NotesListPage);
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
        }else{
            
        }
      return false;
  }

  createNote(){
    this.noteProvider.createNote(this.note).subscribe((res:any) => {
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
}
