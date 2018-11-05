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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController, public  cameraProvider:CameraProvider) {

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


  deleteAlert(){
    const confirm = this.alertCtrl.create({
      title: 'Are sure you want to delete this note?',
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
          }
        }
      ]
    });
    confirm.present();
  }

  createNote() {
    this.navCtrl.push(NotesListPage);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
  }

  
  

}
