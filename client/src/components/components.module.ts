import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { NoteListComponent } from './note-list/note-list';

@NgModule({
	declarations: [MenuComponent,
    NoteListComponent],
	imports: [],
	exports: [MenuComponent,
    NoteListComponent]
})
export class ComponentsModule {}
