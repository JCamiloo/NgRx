import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IncomeExpenses } from './income-expenses.model';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class IncomeExpensesService {

  constructor(private afDB: AngularFirestore, 
              private authSrv: AuthService,
              private toast: ToastrService) { }

  createIncomeExpenses(incomeExpenses: IncomeExpenses) {
    const user = this.authSrv.getUser();
    this.afDB.doc(`${user.uid}/incomes-expenses`).collection('items').add({...incomeExpenses}).then(() => {
      this.toast.success('Registro exitoso');
    }).catch(err => this.toast.error(err['message'], 'Error'));
  }
}
