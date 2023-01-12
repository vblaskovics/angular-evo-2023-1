import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Observable, Observer, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tree Service';

  newTodo: string = "";

  constructor(private todoService: TodoService) {

    let observable1: Observable<number> = timer(3000);
    let observer1: Observer<number> = {
      next: (value: number) => {
        console.log("timer 1: " + value);
      },
      error: (error: any) => {
        console.log("error: " + error);
      },
      complete: () => {
        console.log("complete");
      }
    };

  }

  addNewTodo() {
    this.todoService.addNewTodo(this.newTodo);
    this.newTodo = "";
  }

  get todosCount() {
    return this.todoService.getTodoList().length;
  }

}
