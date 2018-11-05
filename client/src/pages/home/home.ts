import { TokenProvider } from './../../providers/token/token';
import { NativeStorage } from '@ionic-native/native-storage';
import { NotesListPage } from './../notes-list/notes-list';
import { UserProvider } from './../../providers/user/user';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { AlertController, ToastController } from 'ionic-angular';
=======
import { NavController, AlertController } from 'ionic-angular';
>>>>>>> 770782325c286808bb5c6c6fda8a7b1faad2d048

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user={ 
    username:"",
    password:""
  }

<<<<<<< HEAD
  //passwordType: string ='password';
  //passwordIcon: string='eye-off';

  constructor(public navCtrl: NavController, private usersProvider: UserProvider, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  goToListNotes() {
    this.usersProvider.login(this.user).then((result) => {
      console.log(result);
          this.navCtrl.setRoot(NotesListPage);
          this.presentToast();
    }, (err) => {
      console.log(err);
      this.presentToast_error();
    });
=======
  constructor(public navCtrl: NavController, private userProvider: UserProvider, public alertCtrl: AlertController,
              private nativeStorage: NativeStorage, private tokenProvider:TokenProvider) {
  }

  ionViewWillEnter() {
    console.log("HomePage")
>>>>>>> 770782325c286808bb5c6c6fda8a7b1faad2d048
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
    } else {
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

  goToSignUp(){
    this.navCtrl.push(SignupPage);
  }

<<<<<<< HEAD
  missingField(){
    const confirm = this.alertCtrl.create({
      title: 'Campos Incompletos',
    });
    confirm.present();
  }

  presentToast(){
    let toast = this.toastCtrl.create({
      message: 'Usted ha iniciado sesion',
      duration: 3000,
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
 
=======
>>>>>>> 770782325c286808bb5c6c6fda8a7b1faad2d048
}
