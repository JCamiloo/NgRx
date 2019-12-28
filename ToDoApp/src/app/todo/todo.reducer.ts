import { Todo } from './model/todo.model';
import * as todoAction from './todo.actions';

const initState: Todo[] = [];

export function todoReducer(state = initState, action: todoAction.Actions): Todo[] {
  switch (action.type) {
    case todoAction.ADD_TODO:
      const todo = new Todo(action.content);
      return [...state, todo];
    default:
      return state;
  }
}