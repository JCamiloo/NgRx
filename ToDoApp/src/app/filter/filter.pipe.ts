import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as filterActions from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filterActions.validFilters ): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter(todos => todos.completed);
      case 'pending':
        return todos.filter(todos => !todos.completed);
      default:
        return todos;
    }
  }
}