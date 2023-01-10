import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [
    { title: 'Todo 1', active: true },
    { title: 'Todo 2', active: false },
    { title: 'Todo 3', active: true },
    { title: 'Todo 4', active: true },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  get activeTodosCount():number {
    return this.todos.filter((t) => t.active).length;
  }

  toggleTodoStatus(index: number) {
    this.todos[index].active = !this.todos[index].active; 
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

}
