import { IncomeExpensesService } from './../income-expenses.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IncomeExpenses } from './../income-expenses.model';

@Component({
  selector: 'app-income-expenses',
  templateUrl: './income-expenses.component.html',
  styles: []
})
export class IncomeExpensesComponent implements OnInit {

  incomeForm: FormGroup;
  type: string = 'income';

  constructor(private incomeSrv: IncomeExpensesService) { }

  ngOnInit() {
    this.incomeForm = new FormGroup({
      'description': new FormControl('', Validators.required),
      'amount': new FormControl(0, Validators.min(1))
    });
  }

  createIncomeExpenses() {
    const incomeExpenses = new IncomeExpenses({...this.incomeForm.value, type: this.type});
    this.incomeSrv.createIncomeExpenses(incomeExpenses);
    this.incomeForm.reset({ amount: 0});
  }
}
