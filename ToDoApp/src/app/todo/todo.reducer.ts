import { Todo } from './model/todo.model';
import * as todoAction from './todo.actions';

const todo1 = new Todo('Learn');
const todo2 = new Todo('Lern more');
const todo3 = new Todo('Learn even more');
const initState: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = initState, action: todoAction.Actions): Todo[] {
  switch (action.type) {
    case todoAction.ADD_TODO:
      const todo = new Todo(action.content);
      return [...state, todo];
    default:
      return state;
  }
}