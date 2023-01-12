import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, map } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit, OnDestroy {
  deleteAllCounter$: Observable<number> = new Observable();
  // deleteAllCounter: number = 0;
  // deleteAllSubscription?: Subscription;

  secondsFromLastNewTodo$: Subject<number> = new Subject();
  // secondsFromLastNewTodo:number = 0;
  // secondsFromSubscription?: Subscription;

  minutesFromLastNewTodo$: Observable<number> = new Observable();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.deleteAllCounter$ = this.todoService.deleteAllCounter$;
    // this.deleteAllSubscription = this.deleteAllCounter$.subscribe((counter) => {
    //   this.deleteAllCounter = counter;
    // });

    this.secondsFromLastNewTodo$ = this.todoService.secondsFromLastNewTodo$;
    // this.secondsFromSubscription = this.secondsFromLastNewTodo$.subscribe((seconds) => {
    //   console.log('hello admin page / seconds: ', seconds);
    //   this.secondsFromLastNewTodo = seconds;
    // });

    this.minutesFromLastNewTodo$ = this.secondsFromLastNewTodo$.pipe(
      map((seconds) => Math.ceil(seconds / 60))
    );
  }

  ngOnDestroy(): void {
    // this.deleteAllSubscription?.unsubscribe();
    // this.secondsFromSubscription?.unsubscribe();
  }

  deleteAllTodos() {
    this.todoService.deleteAllTodos();
  }

}
