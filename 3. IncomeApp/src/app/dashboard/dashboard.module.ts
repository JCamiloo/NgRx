import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from '../income-expenses/components/statistics/statistics.component';
import { IncomeExpensesComponent } from '../income-expenses/components/income-expenses/income-expenses.component';
import { DetailComponent } from '../income-expenses/components/detail/detail.component';
import { AuthGuardService } from '../auth/guards/auth-guard.service';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: StatisticsComponent },
      { path: 'income-expenses', component: IncomeExpensesComponent },
      { path: 'detail', component: DetailComponent}
    ],
    canActivate: [ AuthGuardService ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class DashboardModule { }
