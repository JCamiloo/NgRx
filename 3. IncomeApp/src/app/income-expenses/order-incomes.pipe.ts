import { Pipe, PipeTransform } from '@angular/core';
import { IncomeExpenses } from './income-expenses.model';

@Pipe({
  name: 'orderIncomes'
})
export class OrderIncomesPipe implements PipeTransform {

  transform(items: IncomeExpenses[]): IncomeExpenses[] {
    return items.sort((a,b) => {
      if (a.type === 'income') {
        return -1;
      } else {
        return 1;
      }
    });
  }
}
