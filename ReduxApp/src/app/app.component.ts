import { IncreaseAction, DecreaseAction } from './counter/counter.actions';
import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState {
  counter: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {

  counter: number; 

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => { this.counter = state.counter });
  }

  increase() {
    const action = new IncreaseAction();
    this.store.dispatch(action);
  }

  decrease() {
    const action = new DecreaseAction();
    this.store.dispatch(action);
  }
}
