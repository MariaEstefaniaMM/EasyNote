import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})

export class NotePage {

  myPhoto: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  takePhoto(){
    console.log('camera');
    /*const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) =>{
      this.myPhoto = 'data:image/jpeg;base64' + imageData;
      
    }, (err) =>{
      //handle error
    });*/
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
            console.log('SAVE');
          }
        }
      ]
    });
    confirm.present();
  }

  createNote(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
  }

}
