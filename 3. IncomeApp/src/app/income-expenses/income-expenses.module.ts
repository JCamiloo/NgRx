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

@NgModule({
  declarations: [
    IncomeExpensesComponent,
    StatisticsComponent,
    DetailComponent,
    OrderIncomesPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ChartsModule    
  ]
})
export class IncomeExpensesModule { }
