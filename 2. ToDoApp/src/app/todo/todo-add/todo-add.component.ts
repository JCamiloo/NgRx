import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as todoActions from '../todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.textInput = new FormControl('', Validators.required);
  }

  addTodo() {
    if (this.textInput.value.trim() === ''){
      return;
    } 
    const action = new todoActions.AddTodoAction(this.textInput.value.trim());
    this.store.dispatch(action);
    this.textInput.setValue('');
  }
}