import { MenuComponent } from './../../components/menu/menu';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesListPage } from './notes-list';
import { NoteListComponent } from '../../components/note-list/note-list';


@NgModule({
  declarations: [
    NotesListPage,
    MenuComponent,
    NoteListComponent,
  ],
  imports: [
    IonicPageModule.forChild(NotesListPage),
  ],
})
export class NotesListPageModule {}
