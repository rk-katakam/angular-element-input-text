import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.css']
})
export class InputElement {

  @Input('text') inputValue:string;

  inputSubmit(event) {
    this.inputValue += this.inputValue; 
    console.log('inputValue', this.inputValue, event.target);

  }
}
