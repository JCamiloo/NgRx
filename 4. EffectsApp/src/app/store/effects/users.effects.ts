import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from './../../services/user.service';
import * as usersActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

  constructor(private actions$: Actions, private usersSrv: UserService) {}

  @Effect()
  fetchUsers$ = this.actions$.pipe(ofType(usersActions.FETCH_USERS)).pipe(
    switchMap(() => this.usersSrv.getUsers().pipe(
      map(users => new usersActions.FetchUsersSuccess(users)),
      catchError(error => of(new usersActions.FetchUsersFail(error)))
    ))
  );
}