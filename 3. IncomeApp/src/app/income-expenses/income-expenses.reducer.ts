import * as incomeExpensesActions from './income-expenses.actions';
import { IncomeExpenses } from './models/income-expenses.model';
import { AppState } from '../app.reducer';

export interface IncomeExpensesState { items: IncomeExpenses[]; }

export interface IncomeState extends AppState {
  incomeExpenses: IncomeExpensesState;
}

const initState: IncomeExpensesState = { items: [] };

export function IncomeExpensesReducer (state = initState, action: incomeExpensesActions.actions): IncomeExpensesState {
  switch (action.type) {
    case incomeExpensesActions.SET_ITEMS:
      return { items: [ ...action.items ]};
    case incomeExpensesActions.UNSET_ITEMS:
      return { items: [] }; 
    default:
      return state;
  }
}