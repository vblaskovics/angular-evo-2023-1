import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tree } from 'src/app/models/tree';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  @Input() tree?: Tree;
  @Output() deleteMe: EventEmitter<Tree> = new EventEmitter<Tree>();
  closed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleFolder(): void {
    this.closed = !this.closed;
  }

  clickDelete(e: Event): void {
    this.deleteMe.emit(this.tree);
  }

  deleteItem(subTree: Tree): void {
    this.tree!.subTrees = this.tree?.subTrees?.filter(
      (item) => item.label !== subTree.label
    );
  }
}
