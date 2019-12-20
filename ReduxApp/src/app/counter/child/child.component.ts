import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent {

  @Input() counter: number;
  @Output() counterChanged = new EventEmitter<number>();

  constructor() { }

  multiply() {
    this.counter *= 2;
    this.counterChanged.emit(this.counter);
  }

  divide() {
    this.counter /= 2;
    this.counterChanged.emit(this.counter);
  }

}
