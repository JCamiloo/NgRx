import { Action } from '@ngrx/store';
import { User } from './../../models/user.model';

export const FETCH_USER = '[Users] Load user';
export const FETCH_USER_SUCCESS = '[Users] Load user success';
export const FETCH_USER_FAIL = '[Users] Load user fail';

export class FetchUser implements Action {
  readonly type = FETCH_USER;
  constructor(public id: string) {}
}

export class FetchUserSuccess implements Action {
  readonly type = FETCH_USER_SUCCESS;
  constructor(public user: User) {}
}

export class FetchUserFail implements Action {
  readonly type = FETCH_USER_FAIL;
  constructor(public payload: any) {}
}

export type userActions = FetchUser |
                          FetchUserFail |
                          FetchUserSuccess;