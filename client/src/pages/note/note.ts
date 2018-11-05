import { NoteProvider } from './../../providers/note/note';
import { Note } from './../../models/note';
import { NotesListPage } from './../notes-list/notes-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { AlertController, ToastController } from 'ionic-angular';
import { CameraProvider } from './../../providers/camera/camera';
=======
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
>>>>>>> 770782325c286808bb5c6c6fda8a7b1faad2d048

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})

export class NotePage {

<<<<<<< HEAD
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
=======
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
      
>>>>>>> 770782325c286808bb5c6c6fda8a7b1faad2d048
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
<<<<<<< HEAD
            console.log('deleted');
            this.deleteToast();
=======
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
>>>>>>> 770782325c286808bb5c6c6fda8a7b1faad2d048
          }
        }
      ]
    });
    confirm.present();
  }
<<<<<<< HEAD

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
=======
    
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
>>>>>>> 770782325c286808bb5c6c6fda8a7b1faad2d048
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
