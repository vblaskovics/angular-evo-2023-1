import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  deleteAllCounter$: Observable<number> = new Observable();

  deleteAllCounter: number = 0;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    console.log('ngOninit()', this.deleteAllCounter);
    
    this.deleteAllCounter$ = this.todoService.deleteAllCounter$;
    
    this.deleteAllCounter$.subscribe((counter) => {
      this.deleteAllCounter = counter;
      console.log('ngOninit() / subscribe', this.deleteAllCounter);
    });

  }

  deleteAllTodos() {
    this.todoService.deleteAllTodos();
  }


}
