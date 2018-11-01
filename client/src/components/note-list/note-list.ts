import { Component, Input } from '@angular/core';

/**
 * Generated class for the NoteListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'note-list',
  templateUrl: 'note-list.html'
})
export class NoteListComponent {

  @Input() title: string;
  @Input() description: string;

  constructor() {
    console.log('Hello NoteListComponent Component');
    this.title = 'Hello';
    this.description = 'Hello World';
  }

}
