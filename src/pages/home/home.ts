import { SignupPage } from './../signup/signup';
import { NotePage } from './../note/note';
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

  goToNotes() {
    this.navCtrl.push(NotePage);
  }
  goToSignUp(){
    this.navCtrl.push(SignupPage);
  }

}
