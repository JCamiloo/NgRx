import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {

  counter: number; 

  constructor() {
    this.counter = 10;
  }

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
