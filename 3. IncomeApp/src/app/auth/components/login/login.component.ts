import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  isLoading$: Observable<boolean>;

  constructor(private authSrv: AuthService, private store: Store<AppState>) { }

  ngOnInit() {
    this.isLoading$ = this.store.select('ui').pipe(map(ui => ui.isLoading));
  }

  onSubmit(data: any) {
    this.authSrv.login(data.email, data.password);
  }
}