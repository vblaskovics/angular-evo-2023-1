import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Observable, Observer, filter, map, tap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tree Service';

  newTodo: string = '';

  constructor(private todoService: TodoService) {
    // let observable1: Observable<number> = timer(0, 1000);
    // let observer1: Observer<number> = {
    //   next: (value: number) => {
    //     console.log('timer 1: ' + value);
    //   },
    //   error: (error: any) => {
    //     console.log('error: ' + error);
    //   },
    //   complete: () => {
    //     console.log('complete');
    //   },
    // };

    // observable1.subscribe(observer1);
    // observable1.subscribe((value) => {
    //   console.log('timer 2: ' + value);
    // });

    // let observable2: Observable<number> = observable1.pipe(
    //   filter((value) => value % 2 == 0),
    //   tap((value) => {
    //     console.log('tap: ' + value);
    //   }),
    //   map((value) => value * -1)
    // );

    // observable2.subscribe((value: number) => {
    //   this.todoService.addNewTodo('todo ' + value);
    //   console.log('timer 1: ' + value);
    // });
  }

  addNewTodo() {
    this.todoService.addNewTodo(this.newTodo);
    this.newTodo = '';
  }

  get todosCount() {
    return this.todoService.getTodoList().length;
  }
}
