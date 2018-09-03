import { Component } from '@angular/core';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.css']
})
export class InputElement {

  public inputValue:string;
  inputSubmit(event) {
    this.inputValue += this.inputValue; 
    console.log('inputValue', this.inputValue, event.target);

  }
}
