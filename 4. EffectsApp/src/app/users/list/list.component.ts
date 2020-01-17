import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usersActions from '../../store/actions'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new usersActions.FetchUsers());
  }
}
