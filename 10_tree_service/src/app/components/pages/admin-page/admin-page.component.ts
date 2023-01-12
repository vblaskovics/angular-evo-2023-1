import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  deleteAllTodos() {
    this.todoService.deleteAllTodos();
  }


}
