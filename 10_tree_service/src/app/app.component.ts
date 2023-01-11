import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tree Service';

  newTodo: string = "";

  constructor(private todoService: TodoService) {}

  addNewTodo() {
    this.todoService.addNewTodo(this.newTodo);
    this.newTodo = "";
  }

  get todosCount() {
    return this.todoService.getTodoList().length;
  }

}
