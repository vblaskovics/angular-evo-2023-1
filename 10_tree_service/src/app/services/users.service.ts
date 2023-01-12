import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';

const API = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  allUsers$: BehaviorSubject<Array<User>> = new BehaviorSubject<Array<User>>([]);

  constructor(private http:HttpClient) { 
    this.updateAllUsers();
  }

  updateAllUsers() {
    this.getUsers().subscribe(users => {
      this.allUsers$.next(users);
    });
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(API);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${API}/${id}`);
  }

  getUserPosts(id: number): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${API}/${id}/posts`);
  }
}
