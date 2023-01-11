import { Injectable } from '@angular/core';
import { Tree } from '../models/tree';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Tree = {
    subTrees: [
      { label: 'Todo 1' },
      {
        label: 'Todo 2',
        subTrees: [
          {
            label: 'Sub-todo 1 ',
            subTrees: [{ label: 'Sub-sub-todo 1' }],
          },
          { label: 'Sub-todo 2 ' },
        ],
      },
      { label: 'Todo 3' },
    ],
  };

  constructor() { }

  getTodos() {
    return this.todos;
  }

  addNewTodo(todoLabel: string) {
    if(!this.todos.subTrees) {
      this.todos.subTrees = [];
    }
    
    this.todos.subTrees.push({ label: todoLabel });
  }

  getTodoList(): string[] {
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
