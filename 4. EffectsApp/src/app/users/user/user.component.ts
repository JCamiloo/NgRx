import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './../../models/user.model';
import * as userActions from '../../store/actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  user$: Observable<User>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(new userActions.FetchUser(id));
    });

    this.user$ = this.store.select('user').pipe(map(data => data.user));
    this.loading$ = this.store.select('user').pipe(map(data => data.loading));
    this.error$ = this.store.select('user').pipe(map(data => data.error));
  }
}
