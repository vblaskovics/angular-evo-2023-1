import { Component, OnInit } from '@angular/core';
import { Tree } from 'src/app/models/tree';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent implements OnInit {

  todos?:Tree;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  get todoList(): string[] {
    let todoArr: string[] = [];
    if (this.todos) {
      this.getLabelsRecursively(this.todos, todoArr);
    }
    return todoArr;
  }

  getLabelsRecursively(tree: Tree, todoArr: string[]): void {
    if (tree.label) {
      todoArr.push(tree.label);
    }
    if (tree.subTrees) {
      tree.subTrees.forEach((subTree) => {
        this.getLabelsRecursively(subTree, todoArr);
      });
    }
  }

}
