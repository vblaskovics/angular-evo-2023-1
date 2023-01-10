import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '04_builtin_directives';

  getRedAndBoldClasses() {
    return ['redText', 'boldText'];
  }

  getParagraphStyle() {
    return {
      'font-weight': 'bold',
      'font-size': '20px',
      'color': 'red'
    };
  }

  getRandomBoolean(): boolean {
    return Math.random() > 0.5;
  }

  getTodoList() {
    return [
      'todo-1',
      'todo-2',
      'todo-3',
    ]
  }
}
