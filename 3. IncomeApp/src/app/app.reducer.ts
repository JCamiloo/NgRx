import * as fromUI from './shared/ui.reducer';
import * as fromAuth from './auth/auth.reducer';
import * as fromIncomeExpenses from './income-expenses/income-expenses.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  ui: fromUI.State;
  auth: fromAuth.AuthState
  incomeExpenses: fromIncomeExpenses.IncomeExpensesState
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: fromUI.UIReducer,
  auth: fromAuth.AuthReducer,
  incomeExpenses: fromIncomeExpenses.IncomeExpensesReducer
}