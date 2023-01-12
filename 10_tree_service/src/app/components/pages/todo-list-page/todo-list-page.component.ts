import { Component, OnInit } from '@angular/core';
import { Tree } from 'src/app/models/tree';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css'],
})
export class TodoListPageComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  get todoList(): string[] {
    return this.todoService.getTodoList();
  }
}
