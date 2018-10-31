import { MenuComponent } from './../../components/menu/menu';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotePage } from './note';

@NgModule({
  declarations: [
    NotePage,
    MenuComponent
  ],
  imports: [
    IonicPageModule.forChild(NotePage),
  ],
})
export class NotePageModule {}
