import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';
import { IncomeExpensesService } from 'src/app/income-expenses/income-expenses.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  userName$: Observable<string>

  constructor(private authSrv: AuthService, 
              private store: Store<AppState>,
              private incomeSrv: IncomeExpensesService) { }

  ngOnInit() {
    this.userName$ = this.store.select('auth')
                               .pipe(filter(auth => auth.user != null))
                               .pipe(map(auth => auth.user.name));
  }

  logout() {
    this.authSrv.logout();
    this.incomeSrv.cancelSubscriptions();
  }
}
