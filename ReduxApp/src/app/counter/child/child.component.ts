import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import * as counterActions from '../counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {

  counter$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.counter$ = this.store.select('counter');
  }

  multiply() {
    this.store.dispatch(new counterActions.MultiplyAction(2));
  }

  divide() {
    this.store.dispatch(new counterActions.DivideAction(2));
  }
}
