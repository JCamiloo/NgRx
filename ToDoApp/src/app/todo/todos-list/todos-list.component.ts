import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Todo } from './../model/todo.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.todos$ = this.store.select('todos');
  }

}
