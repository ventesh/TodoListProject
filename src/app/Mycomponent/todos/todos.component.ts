import { Component } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { FormsModule } from '@angular/forms';
import { PageModel } from '../../page-model';

@Component({
  selector: 'app-todos',
  imports: [NgFor, TodoItemComponent,CommonModule, AddTodoComponent, FormsModule, NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  localItem: string | null;
  todos!:Todo[];
  filterTodos!:Todo[];
  pages:PageModel[]=[];
  currentPage:number=1;

  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = []
    }
    else{
      this.todos=JSON.parse(this.localItem);
      for(let i=0;i<this.todos.length/5;i++){
        var newp:PageModel={
          pageNumber: i + 1,
        }
        this.pages=[...this.pages,newp];
      }
      this.currentPage=1;
      var temp=[...this.todos];
      this.filterTodos=temp.splice(0,5);
    }
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.pages=[];

    for(let i=0;i<this.todos.length/5;i++){
      var newp:PageModel={
        pageNumber: i + 1,
      }
        this.pages=[...this.pages,newp];
    }
    var temp=[...this.todos];
    this.filterTodos=temp.splice((this.currentPage-1)*5,this.currentPage*5);
  }
  changePage(page:number){
    this.currentPage=page;
    var temp=[...this.todos];
    this.filterTodos=temp.splice((page-1)*5,page*5);
   
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    this.pages=[];
    for(let i=0;i<this.todos.length/5;i++){
      var newp:PageModel={
        pageNumber: i + 1,
      }
        this.pages=[...this.pages,newp];
    }
    var temp=[...this.todos];
    this.filterTodos=temp.splice((this.currentPage-1)*5,this.currentPage*5);
  }

  toggleTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active; 
    localStorage.setItem("todos", JSON.stringify(this.todos));
   
  }

}
