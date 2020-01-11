import { IncomeExpenses } from './models/income-expenses.model';
import * as incomeExpensesActions from './income-expenses.actions';

export interface IncomeExpensesState { items: IncomeExpenses[]; }
const initState: IncomeExpensesState = { items: [] };

export function IncomeExpensesReducer (state = initState, action: incomeExpensesActions.actions) {
  switch (action.type) {
    case incomeExpensesActions.SET_ITEMS:
      return { items: [ ...action.items ]};
    case incomeExpensesActions.UNSET_ITEMS:
      return { items: [] }; 
    default:
      return state;
  }
}