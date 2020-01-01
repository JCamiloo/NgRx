import { Action } from '@ngrx/store';

export type validFilters = 'all' | 'completed' | 'pending';

export const SET_FILTER = '[Filter] Set Filter';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;
  constructor(public filter: validFilters) {}
} 

export type actions = SetFilterAction;