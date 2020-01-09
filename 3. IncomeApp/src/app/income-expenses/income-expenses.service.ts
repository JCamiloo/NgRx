import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IncomeExpenses } from './income-expenses.model';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as UIActions from '../shared/ui.actions';
import { filter, map } from 'rxjs/operators';
import { SetItemsAction } from './income-expenses.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncomeExpensesService {

  incomeExpensesSubs: Subscription[] = [];

  constructor(private afDB: AngularFirestore, 
              private authSrv: AuthService,
              private toast: ToastrService,
              private store: Store<AppState>) { }

  initIncomeExpensesListener() {
    this.incomeExpensesSubs.push(
      this.store.select('auth').pipe(filter(auth => auth.user != null))
                .subscribe(auth => this.incomeExpensesItems(auth.user.uid))
    );
  }
  
  private incomeExpensesItems(uid: string) {
    this.incomeExpensesSubs.push(
      this.afDB.collection(`${uid}/incomes-expenses/items`).snapshotChanges().pipe(map(docData => {
        return docData.map(doc => {
          return {
            uid: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      })).subscribe((collection: IncomeExpenses[]) => this.store.dispatch(new SetItemsAction(collection)))
    );
  }

  createIncomeExpenses(incomeExpenses: IncomeExpenses) {
    this.store.dispatch(new UIActions.ActivateLoadingAction());
    const user = this.authSrv.getUser();
    this.afDB.doc(`${user.uid}/incomes-expenses`).collection('items').add({...incomeExpenses}).then(() => {
      this.store.dispatch(new UIActions.DeactivateLoadingAction());
      this.toast.success('Registro exitoso');
    }).catch(err => {
      this.store.dispatch(new UIActions.DeactivateLoadingAction());
      this.toast.error(err['message'], 'Error');
    });
  }

  deleteIncomeExpenses(item: IncomeExpenses) {
    const user = this.authSrv.getUser();
    this.afDB.doc(`${user.uid}/incomes-expenses/items/${item.uid}`).delete().then(() => {
      this.toast.success(`${item.description} eliminado`)
    }).catch((err) => this.toast.error(err['message']));
  }

  cancelSubscriptions() {
    this.incomeExpensesSubs.forEach(subscription => subscription.unsubscribe());
  }
}
