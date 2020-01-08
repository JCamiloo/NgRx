import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IncomeExpenses } from './income-expenses.model';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { ActivateLoadingAction, DeactivateLoadingAction } from '../shared/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class IncomeExpensesService {

  constructor(private afDB: AngularFirestore, 
              private authSrv: AuthService,
              private toast: ToastrService,
              private store: Store<AppState>) { }

  createIncomeExpenses(incomeExpenses: IncomeExpenses) {
    this.store.dispatch(new ActivateLoadingAction());
    const user = this.authSrv.getUser();
    this.afDB.doc(`${user.uid}/incomes-expenses`).collection('items').add({...incomeExpenses}).then(() => {
      this.store.dispatch(new DeactivateLoadingAction());
      this.toast.success('Registro exitoso');
    }).catch(err => {
      this.store.dispatch(new DeactivateLoadingAction());
      this.toast.error(err['message'], 'Error');
    });
  }
}
