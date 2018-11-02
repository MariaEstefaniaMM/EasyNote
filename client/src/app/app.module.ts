import { NoteListComponent } from './../components/note-list/note-list';
import { MenuComponent } from './../components/menu/menu';
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
import { Camera } from '@ionic-native/camera';
//import { ImagePicker } from '@ionic-native/image-picker';
import { AlertController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { UserProvider } from '../providers/user/user';
import { NoteProvider } from '../providers/note/note';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    NotePage,
    NotesListPage,
    MenuComponent,
    NoteListComponent
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
    NotesListPage,
    MenuComponent
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    Camera, 
    AlertController,
    //ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    NoteProvider
  ]
})
export class AppModule {}
