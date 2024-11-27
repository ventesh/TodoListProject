import { Component } from '@angular/core';
import { Todo } from '../../todo';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [NgFor, TodoItemComponent, AddTodoComponent, FormsModule, NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  localItem: string | null;
  todos!:Todo[];

  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active; 
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
