import { NotesListPage } from './../notes-list/notes-list';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
  }

  signUp() {
    this.userProvider.createUser(this.user).then((result) => {
      console.log(result);
        this.navCtrl.push(NotesListPage);
    }, (err) => {
      console.log(err);
    });
}

}
