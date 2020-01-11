import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AppState } from 'src/app/app.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  isLoading$: Observable<boolean>;

  constructor(private authSrv: AuthService, private store: Store<AppState>) { }

  ngOnInit() {
    this.isLoading$ = this.store.select('ui').pipe(map(ui => ui.isLoading));
  }

  onSubmit(data: any) {
    this.authSrv.createUser(data.name, data.email, data.password);
  }
}
