import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() tododelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbok: EventEmitter<Todo> = new EventEmitter();


  OnClick(todo: Todo){
    this.tododelete.emit(todo);
    console.log("On click has be triggered..!");
  }

  onChackboxClick(todo: Todo){
    this.todoCheckbok.emit(todo);
  }

}
