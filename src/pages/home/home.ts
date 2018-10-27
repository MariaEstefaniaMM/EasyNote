import { LoginPage } from './../login/login';
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

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
