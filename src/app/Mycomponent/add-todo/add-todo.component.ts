import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  title!: string; 
  desc!: string;

  isModelOpen = false;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  toggleModel(){
    this.isModelOpen = !this.isModelOpen;
  }

  onSubmit(){
    const todo = {
      sno: Math.random(),
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.title='';
    this.desc='';
    this.todoAdd.emit(todo);
    console.log(this.title , this.desc);
  }

}
