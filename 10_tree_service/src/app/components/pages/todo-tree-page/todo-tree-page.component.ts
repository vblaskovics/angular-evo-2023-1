import { Component, OnInit } from '@angular/core';
import { Tree } from 'src/app/models/tree';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-tree-page',
  templateUrl: './todo-tree-page.component.html',
  styleUrls: ['./todo-tree-page.component.css']
})
export class TodoTreePageComponent implements OnInit {

  todos?: Tree

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

}
