import { NotesListPage } from './../notes-list/notes-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})

export class NotePage {

  myPhoto: any; //create a variable to save picture path/source
  //note: {id: null, title: null, description: null};

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public alertCtrl: AlertController, private imagePicker: ImagePicker) {

<<<<<<< HEAD
=======
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
>>>>>>> cf0b1f5707c3d661545a0d0f6fcd190108f6b123
  }

  takePhoto() {
    console.log('camera');
    /*const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) =>{
    this.myPhoto = 'data:image/jpeg;base64' + imageData;
    console.log('photo'); 
    }, (error) =>{
      //handle error
<<<<<<< HEAD
      console.log(error);
    });
=======
    });*/
>>>>>>> cf0b1f5707c3d661545a0d0f6fcd190108f6b123
  }

  /*takeImage(){
    this.imagePicker.getPictures(options).then((result) =>{
      for (var i=0; i< results.length; i++){
        console.log('image URI:' + results[i]);
      }
    }, (err) =>{});
  } */

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

<<<<<<< HEAD
  createNote() {
    this.navCtrl.push(NotesListPage);
=======
  createNote(){
    
>>>>>>> cf0b1f5707c3d661545a0d0f6fcd190108f6b123
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
  }

}
