import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { MultiplyAction, DivideAction } from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {

  counter: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  multiply() {
    this.store.dispatch(new MultiplyAction(2));
  }

  divide() {
    this.store.dispatch(new DivideAction(2));
  }
}
