import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TreeComponentNG';
  todos = {
    subTrees: [
      { label: 'Todo 1' },
      {
        label: 'Todo 2',
        subTrees: [{ label: 'Sub-todo 1 ' }, { label: 'Sub-todo 2 ' }],
      },
      { label: 'Todo 3' },
    ],
  };


}
