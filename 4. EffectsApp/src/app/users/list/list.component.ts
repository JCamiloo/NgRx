import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usersActions from '../../store/actions'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.users$ = this.store.select('users').pipe(map(data => data.users));
    this.loading$ = this.store.select('users').pipe(map(data => data.loading));
    this.error$ = this.store.select('users').pipe(map(data => data.error));
    this.store.dispatch(new usersActions.FetchUsers());
  }
}
