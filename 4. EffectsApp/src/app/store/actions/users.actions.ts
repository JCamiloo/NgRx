import { Action } from '@ngrx/store';
import { User } from './../../models/user.model';

export const FETCH_USERS = '[Users] Load users';
export const FETCH_USERS_SUCCESS = '[Users] Load users success';
export const FETCH_USERS_FAIL = '[Users] Load users fail';

export class FetchUsers implements Action {
  readonly type = FETCH_USERS;
}

export class FetchUsersSuccess implements Action {
  readonly type = FETCH_USERS_SUCCESS;
  constructor(public users: User[]) {}
}

export class FetchUsersFail implements Action {
  readonly type = FETCH_USERS_FAIL;
  constructor(public payload: any) {}
}

export type usersActions = FetchUsers |
                           FetchUsersFail |
                           FetchUsersSuccess;