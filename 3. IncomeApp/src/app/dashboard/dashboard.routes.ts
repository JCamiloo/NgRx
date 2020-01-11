import { Routes } from '@angular/router';
import { StatisticsComponent } from '../income-expenses/components/statistics/statistics.component';
import { DetailComponent } from '../income-expenses/components/detail/detail.component';
import { IncomeExpensesComponent } from '../income-expenses/components/income-expenses/income-expenses.component';

export const dashboardRoutes: Routes = [
  { path: '', component: StatisticsComponent },
  { path: 'income-expenses', component: IncomeExpensesComponent },
  { path: 'detail', component: DetailComponent}
]