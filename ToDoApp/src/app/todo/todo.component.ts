import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { ToggleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completed = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completed = !this.completed;
    this.store.dispatch(new ToggleAllTodoAction(this.completed));
  }

}
