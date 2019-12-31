import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Todo } from './../model/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Subscription } from 'rxjs';
import { ToggleTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit, OnDestroy {

  @Input() todo: Todo;
  @ViewChild('editInput', {static: true}) editInput: ElementRef;
  todoForm: FormGroup;
  editing: boolean;
  checkSub: Subscription;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) { 
    this.todoForm = this.formBuilder.group({
      state: new FormControl(''),
      content: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.stateField.setValue(this.todo.completed);
    this.contentField.setValue(this.todo.content);
    this.checkSub = this.stateField.valueChanges.subscribe(() => {
      this.store.dispatch(new ToggleTodoAction(this.todo.id));
    });
  }

  edit() {
    this.editing = true;
    setTimeout(() => this.editInput.nativeElement.select(), 1);
  }

  editFinished() {
    this.editing = false;
  }

  get stateField() {
    return this.todoForm.get('state');
  }

  get contentField() {
    return this.todoForm.get('content');
  }

  ngOnDestroy() {
    this.checkSub.unsubscribe();
  }
}