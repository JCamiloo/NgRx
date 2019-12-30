import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Todo } from './../model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('editInput', {static: true}) editInput: ElementRef;
  todoForm: FormGroup;
  editing: boolean;

  constructor(private formBuilder: FormBuilder) { 
    this.todoForm = this.formBuilder.group({
      state: new FormControl(''),
      content: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.stateField.setValue(this.todo.completed);
    this.contentField.setValue(this.todo.content);
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
}