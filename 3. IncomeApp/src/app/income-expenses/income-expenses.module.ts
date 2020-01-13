import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeExpensesComponent } from './components/income-expenses/income-expenses.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DetailComponent } from './components/detail/detail.component';
import { OrderIncomesPipe } from './pipes/order-incomes.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DashboardComponent } from '../dashboard/components/dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { IncomeExpensesReducer } from './income-expenses.reducer';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardModule,
    SharedModule,
    ChartsModule,
    StoreModule.forFeature('incomeExpenses', IncomeExpensesReducer)
  ],
  declarations: [
    DashboardComponent,
    IncomeExpensesComponent,
    StatisticsComponent,
    DetailComponent,
    OrderIncomesPipe,
  ]
})
export class IncomeExpensesModule { }
