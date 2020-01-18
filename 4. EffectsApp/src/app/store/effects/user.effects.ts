import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from './../../services/user.service';
import * as userActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private usersSrv: UserService) {}

  @Effect()
  fetchUser$ = this.actions$.pipe(ofType(userActions.FETCH_USER)).pipe(
    switchMap((action: userActions.FetchUser) => this.usersSrv.getUserById(action.id).pipe(
      map(user => new userActions.FetchUserSuccess(user)),
      catchError(error => of(new userActions.FetchUserFail(error)))
    ))
  );
}