import { IncomeExpenses } from './models/income-expenses.model';
import { Action } from '@ngrx/store';
export const SET_ITEMS = '[Income expenses] Set items'
export const UNSET_ITEMS = '[Income expenses] Unset items'

export class SetItemsAction implements Action {
  readonly type = SET_ITEMS;
  constructor(public items: IncomeExpenses[]) {}
}

export class UnsetItemsAction implements Action {
  readonly type = UNSET_ITEMS;
}

export type actions = SetItemsAction | UnsetItemsAction;