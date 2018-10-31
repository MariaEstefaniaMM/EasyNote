import { Component, Input } from '@angular/core';

@Component({
  selector: 'note',
  templateUrl: 'note.html'
})
export class NoteComponent {

  @Input() 
  title;
  image;
  date;

  constructor() {
    console.log('Hello NoteComponent Component');
    this.title = 'Hello World';
  }

}
