import { IncomeExpenses } from '../../models/income-expenses.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styles: []
})
export class StatisticsComponent implements OnInit {

  incomes: number;
  expenses: number;
  incomesCounter: number;
  expensesCounter: number;
  dataSubscription: Subscription = new Subscription();
  doughnutChartLabels: Label[] = ['Ingesos', 'Egresos'];
  doughnutChartData: number[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.dataSubscription = this.store.select('incomeExpenses').subscribe(data => {
      this.countIncomeExpenses(data.items);
    });
  }

  countIncomeExpenses(items: IncomeExpenses[]) {
    this.incomes = 0;
    this.expenses = 0;
    this.expensesCounter = 0;
    this.incomesCounter = 0;
    items.forEach(item => {
      if (item.type === 'income') {
        this.incomesCounter++;
        this.incomes += item.amount;
      } else {
        this.expensesCounter++;
        this.expenses += item.amount;
      }
    });
    this.doughnutChartData = [this.incomes, this.expenses];
  }
}
