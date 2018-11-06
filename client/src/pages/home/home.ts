import { TokenProvider } from './../../providers/token/token';
import { NativeStorage } from '@ionic-native/native-storage';
import { NotesListPage } from './../notes-list/notes-list';
import { UserProvider } from './../../providers/user/user';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
//import { User } from '../../models/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user={ 
    username:"",
    password:""
  }

  constructor(public navCtrl: NavController, private userProvider: UserProvider, public alertCtrl: AlertController,
              private nativeStorage: NativeStorage, private tokenProvider:TokenProvider, public toastCtrl: ToastController) {
                console.log('home constructor');
              }

  ionViewCanEnter(){
    console.log('CanEnter HomePage');
    if (this.tokenProvider.getToken()){
      console.log('go to NotesListPage');
        this.navCtrl.setRoot(NotesListPage);
    }else{
      return true;
    }
  }

  ionViewWillEnter() {
    console.log("HomePage")
  }

  goToListNotes() {
    if (this.user.username=="" || this.user.password=="" ){
        (this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Please fill all the fields',
          buttons: ['OK']
        })).present();
    }else this.userProvider.login(this.user).subscribe((res:any) => {
      if(res.status === 200) {
        this.nativeStorage.setItem('userToken', res.token);
        this.tokenProvider.token=res.token;
        console.log(this.tokenProvider.token, res.token);
        this.navCtrl.setRoot(NotesListPage);
        this.presentToast();
    } else {
      console.log('err');
      (this.alertCtrl.create({
        title: 'Error',
        subTitle: res.message,
        buttons: ['OK']
      })).present();
    }
  },
    (err) => {
      console.log(err);
     (this.alertCtrl.create({
        title: 'Error',
        subTitle: JSON.stringify(err),
        buttons: ['OK']
      })).present();    
    }
    ); 
  }

  goToSignUp(){
    this.navCtrl.push(SignupPage);
  }

  missingField(){
    const confirm = this.alertCtrl.create({
      title: 'Campos Incompletos',
    });
    confirm.present();
  }

  presentToast(){
    let toast = this.toastCtrl.create({
      message: 'Usted ha iniciado sesion',
      duration: 4000,
      position: 'bottom'
    });

    toast.onDidDismiss(() =>{
      console.log('dissmissed toast');
    });
    toast.present();
  }

  presentToast_error(){
    let toast = this.toastCtrl.create({
      message: 'Error!',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() =>{
      console.log('dissmissed toast');
    });
    toast.present();
  }
 
}
