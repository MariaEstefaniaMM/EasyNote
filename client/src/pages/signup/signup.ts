import { TokenProvider } from './../../providers/token/token';
import { NativeStorage } from '@ionic-native/native-storage';
import { NotesListPage } from './../notes-list/notes-list';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from './../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  user:User={
    name:"",
    lastName:"",
    username:"",
    email:"",
    password:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private usersProvider: UserProvider,
              private nativeStorage:NativeStorage, public alertCtrl: AlertController, private tokenProvider:TokenProvider) {
  }

  signUp() {
    if (this.user.name=="" || this.user.lastName=="" || this.user.username=="" || 
        this.user.email=="" || this.user.password==""){
        (this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please fill all the fields',
            buttons: ['OK']
        })).present();
    }else{
    this.usersProvider.createUser(this.user).subscribe((res:any) => {
      if (res.status==200){
          console.log(res);    
          this.nativeStorage.setItem('userToken', res.token);
          this.tokenProvider.token=res.token;
          this.navCtrl.push(NotesListPage);
      }else{
        (this.alertCtrl.create({
          title: 'Error',
          subTitle: res.message,
          buttons: ['OK']
        })).present();
      }
    }), (err) => {
      (this.alertCtrl.create({
        title: 'Error',
        subTitle: JSON.stringify(err),
        buttons: ['OK']
      })).present();
    }
  }

  }
}
