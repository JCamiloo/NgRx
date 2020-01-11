import { map, filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  userName$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userName$ = this.store.select('auth')
                               .pipe(filter(auth => auth.user != null))
                               .pipe(map(auth => auth.user.name));
  }
}