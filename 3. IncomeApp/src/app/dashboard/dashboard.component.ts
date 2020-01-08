import { Component, OnInit } from '@angular/core';
import { IncomeExpensesService } from '../income-expenses/income-expenses.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(private incomeSrv: IncomeExpensesService) { }

  ngOnInit() {
    this.incomeSrv.initIncomeExpensesListener();
  }
}