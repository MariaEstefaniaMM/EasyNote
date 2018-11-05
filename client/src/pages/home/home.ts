import { TokenProvider } from './../../providers/token/token';
import { NativeStorage } from '@ionic-native/native-storage';
import { NotesListPage } from './../notes-list/notes-list';
import { UserProvider } from './../../providers/user/user';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

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
              private nativeStorage: NativeStorage, private tokenProvider:TokenProvider) {
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

}
