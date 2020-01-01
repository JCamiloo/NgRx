import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: []
})
export class GrandchildComponent implements OnInit {

  counter$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.counter$ = this.store.select('counter');
  }

  reset() {
    this.store.dispatch(new ResetAction());
  }
}
