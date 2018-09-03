import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { InputElement } from './input-element.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InputElement],
  // bootstrap:[InputElement],
  imports: [BrowserModule, CommonModule, FormsModule],
  entryComponents: [InputElement]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    console.log('ngDoBootstrap angular-element-input-text');
    const inputElement = createCustomElement(InputElement, { injector: this.injector });
    customElements.define('angular-element-input-text', inputElement);
  }
}

