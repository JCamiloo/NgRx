export class IncomeExpenses {
  description: string;
  amount: number;
  type: string;
  uid?: string;

  constructor(incomeExpensesObj: IncomeExpensesObj) {
    this.description = incomeExpensesObj && incomeExpensesObj.description || null;
    this.amount = incomeExpensesObj && incomeExpensesObj.amount || null;
    this.type = incomeExpensesObj && incomeExpensesObj.type || null;
    this.uid = incomeExpensesObj && incomeExpensesObj.uid || null;
  }
}

export interface IncomeExpensesObj {
  description: string;
  amount: number;
  type: string;
  uid?: string;
}