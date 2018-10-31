import { NotesListPage } from './../notes-list/notes-list';
import { UsersProvider } from './../../providers/users/users';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';

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

  constructor(public navCtrl: NavController, private usersProvider: UsersProvider) {
  }

  goToNotes() {
    this.usersProvider.login(this.user).then((result) => {
      console.log(result);
          this.navCtrl.setRoot(NotesListPage);
    }, (err) => {
      console.log(err);
    });
  }
  goToSignUp(){
    this.navCtrl.push(SignupPage);
  }

}
