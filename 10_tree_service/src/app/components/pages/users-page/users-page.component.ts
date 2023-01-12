import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users$: Observable<Array<User>> = new Observable();

  constructor(private usersService:UsersService) { 
  }
  
  ngOnInit(): void {
    this.users$ = this.usersService.allUsers$;
    console.log('UsersPageComponent ngOnInit', this.usersService.allUsers$.getValue());
    //this.users$ = this.usersService.getUsers();
  }

}
