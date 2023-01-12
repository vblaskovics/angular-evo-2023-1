import { Injectable } from '@angular/core';
import { Tree } from '../models/tree';
import { BehaviorSubject, Observable, Subject, map, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
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

  // SOLUTION 1: Using Subject and value
  // deleteAllCounter: number = 0;
  // deleteAllCounter$: Subject<number> = new Subject();

  // SOLUTION 2: Using BehaviorSubject
  deleteAllCounter$: BehaviorSubject<number> = new BehaviorSubject(0);

  lastNewTodoCreated$: BehaviorSubject<Date> = new BehaviorSubject<Date>(
    new Date()
  );
  secondsFromLastNewTodo$: Subject<number> = new Subject();

  constructor() {
    timer(0, 1000)
      .pipe(
        map(() => {
          let lastCreated = this.lastNewTodoCreated$.getValue().getTime();
          return Math.floor((new Date().getTime() - lastCreated) / 1000);
        })
      )
      .subscribe(this.secondsFromLastNewTodo$);
  }

  getTodos() {
    return this.todos;
  }

  addNewTodo(todoLabel: string) {
    if (!this.todos.subTrees) {
      this.todos.subTrees = [];
    }

    this.todos.subTrees.push({ label: todoLabel });
    this.lastNewTodoCreated$.next(new Date());
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

  deleteAllTodos() {
    this.todos = { subTrees: [] };

    // SOLUTION 1: Using Subject and value
    // this.deleteAllCounter++;

    // SOLUTION 2: Using BehaviorSubject
    this.deleteAllCounter$.next(this.deleteAllCounter$.getValue() + 1);
  }
}
