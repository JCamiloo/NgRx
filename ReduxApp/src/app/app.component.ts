import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as counterActions from './counter/counter.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {

  counter$: Observable<number>; 

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select('counter');
  }

  increase() {
    const action = new counterActions.IncreaseAction();
    this.store.dispatch(action);
  }

  decrease() {
    const action = new counterActions.DecreaseAction();
    this.store.dispatch(action);
  }
}
