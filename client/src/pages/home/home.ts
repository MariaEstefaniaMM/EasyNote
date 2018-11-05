import { NotesListPage } from './../notes-list/notes-list';
import { UserProvider } from './../../providers/user/user';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { AlertController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:User={
    name:"",
    lastName:"",
    username:"",
    email:"",
    password:""
  }

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
 
}
