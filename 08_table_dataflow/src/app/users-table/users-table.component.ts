import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  users: Array<User> = [
    { id: 1, name: 'John', age: 25, email: 'john@gmail.com', phone: '123-456-7890' },
    { id: 2, name: 'Mary', age: 30, email: 'mary@gmail.com', phone: '123-456-7891' },
    { id: 3, name: 'Peter', age: 28, email: 'peter@gmail.com', phone: '123-456-7892' },
  ];

  selectedUser?: User;

  constructor() { }

  ngOnInit(): void {
  }

  orderUsersByName(decrease = true) {
    this.users.sort((a, b) => {
      if (decrease) {
        return b.name.localeCompare(a.name);
      }
      return a.name.localeCompare(b.name);
    });
  }

  orderUsersByAge(decrease = true) {
    this.users.sort((a, b) => {
      if (decrease) {
        return b.age - a.age;
      }
      return a.age - b.age;
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u.id !== user.id);
    this.selectedUser = undefined;
  }


}
