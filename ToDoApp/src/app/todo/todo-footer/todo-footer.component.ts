import { Component, OnInit, OnDestroy } from '@angular/core';
import * as filterActions from '../../filter/filter.actions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from './../model/todo.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit, OnDestroy {

  validFilters: filterActions.validFilters[] = ['all', 'completed', 'pending'];
  currentFilter: filterActions.validFilters;
  todosLeft: number;
  filterSub: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.countPending(state.todos);
      this.currentFilter = state.filter;
    });
  }

  changeFilter(newFilter: filterActions.validFilters) {
    this.store.dispatch(new filterActions.SetFilterAction(newFilter));
  }

  countPending(todos: Todo[]) {
    this.todosLeft = todos.filter(todo => !todo.completed).length;
  }

  ngOnDestroy() {
    this.filterSub.unsubscribe();
  }
}