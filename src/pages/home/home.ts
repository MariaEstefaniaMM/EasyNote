import { NotesListPage } from './../notes-list/notes-list';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //myVariable: string = 'The force is with me';

  constructor(public navCtrl: NavController) {
  }

  goToListNotes() {
    this.navCtrl.push(NotesListPage);
    console.log("aquii");
  }
  
  goToSignUp(){
    this.navCtrl.push(SignupPage);
  }

}
