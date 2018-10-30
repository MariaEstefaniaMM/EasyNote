import { NotesListPage } from './../pages/notes-list/notes-list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { NotePage } from './../pages/note/note';
<<<<<<< HEAD:src/app/app.module.ts
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
=======
import { NotesListPage } from './../pages/notes-list/notes-list';
import { HttpClientModule } from '@angular/common/http';
import { UsersProvider } from '../providers/users/users';
>>>>>>> d82b7b86fed6bae96897d33dfb756654fe39855e:client/src/app/app.module.ts

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    NotePage,
    NotesListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    NotePage,
    NotesListPage
  ],
  providers: [
    StatusBar,
<<<<<<< HEAD:src/app/app.module.ts
    SplashScreen, Camera, AlertController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
=======
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider
>>>>>>> d82b7b86fed6bae96897d33dfb756654fe39855e:client/src/app/app.module.ts
  ]
})
export class AppModule {}
