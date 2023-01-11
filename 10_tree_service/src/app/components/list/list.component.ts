import { Component, Input, OnInit } from '@angular/core';
import { Tree } from 'src/app/models/tree';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() tree?: Tree;

  constructor() {}

  ngOnInit(): void {}

  get todoList(): string[] {
    let todoArr: string[] = [];
    if (this.tree) {
      this.getLabelsRecursively(this.tree, todoArr);
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
