import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: []
})
export class GrandchildComponent implements OnInit {

  @Input() counter: number;
  @Output() counterChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  reset() {
    this.counter = 0;
    this.counterChanged.emit(this.counter);
  }
}
