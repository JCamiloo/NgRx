import { IncomeExpensesService } from '../../services/income-expenses.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IncomeExpenses } from '../../models/income-expenses.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-income-expenses',
  templateUrl: './income-expenses.component.html',
  styles: []
})
export class IncomeExpensesComponent implements OnInit {

  incomeForm: FormGroup;
  type: string = 'income';
  loading$: Observable<boolean>;

  constructor(private incomeSrv: IncomeExpensesService, private store: Store<AppState>) { }

  ngOnInit() {
    this.loading$ = this.store.select('ui').pipe(map(ui => ui.isLoading));
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
