import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Observable } from 'rxjs';
import { IncomeExpenses } from '../income-expenses.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailComponent implements OnInit {

  items$: Observable<IncomeExpenses[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.items$ = this.store.select('incomeExpenses').pipe(map(incomeExpenses => incomeExpenses.items));
  }

  deleteItem(uid: string) {
    console.log(uid);
  }

}
