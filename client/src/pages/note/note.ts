import { NoteProvider } from './../../providers/note/note';
import { Note } from './../../models/note';
import { NotesListPage } from './../notes-list/notes-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})

export class NotePage {

  myPhoto: any; 
  note:Note;
  newNote: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public alertCtrl: AlertController,
              private noteProvider:NoteProvider) {
      this.note=navParams.data; 
      console.log(this.note);
  }

  ionViewDidLoad() {
    if (Object.keys(this.note).length === 0)
      this.newNote=true;
    console.log('ionViewDidLoad NotePage');
  }
  
  takePhoto() {
    console.log('camera');
    const options: CameraOptions = {
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
      console.log(error);;
    });
      
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
    
  ionViewCanLeave(){
    console.log("willLeave");
    if (Object.keys(this.note).length !== 0)
        if (this.newNote){
              this.createNote();
              return true;
        }else{
            
        }
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
