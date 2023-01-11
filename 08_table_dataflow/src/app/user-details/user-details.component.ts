import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  @Input() user?: User;

  @Output() deleteUserEvent = new EventEmitter<User>();

  ngOnInit(): void {
  }

  clickDeleteUser() {
    this.deleteUserEvent.emit(this.user);
  }

}
