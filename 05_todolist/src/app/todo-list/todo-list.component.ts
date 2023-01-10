import { Component, OnInit } from '@angular/core';

interface Todo {
  title: string;
  active: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
    { title: 'Todo 1', active: true },
    { title: 'Todo 2', active: true },
    { title: 'Todo 3', active: true },
    { title: 'Todo 4', active: true },
  ];

  constructor() {}

  ngOnInit(): void {}

  get todosCount(): number {
    return this.todos.length;
  }

  get activeTodosCount(): number {
    return this.todos.filter((todo) => todo.active).length;
  }

  removeTodoAt(index: number) {
    this.todos.splice(index, 1);
  }

  toggleTodoActivationAt(index: number) {
    this.todos[index].active = !this.todos[index].active;
  }
}
