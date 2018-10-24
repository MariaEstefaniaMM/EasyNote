import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesListPage } from './notes-list';

@NgModule({
  declarations: [
    NotesListPage,
  ],
  imports: [
    IonicPageModule.forChild(NotesListPage),
  ],
})
export class NotesListPageModule {}
