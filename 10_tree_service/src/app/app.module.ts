import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { ListComponent } from './components/list/list.component';
import { TodoTreePageComponent } from './components/pages/todo-tree-page/todo-tree-page.component';
import { TodoListPageComponent } from './components/pages/todo-list-page/todo-list-page.component';
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './components/pages/admin-page/admin-page.component';
import { UsersPageComponent } from './components/pages/users-page/users-page.component';

const routes: Routes = [
  { path: 'tree', component: TodoTreePageComponent },
  { path: 'list', component: TodoListPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'users', component: UsersPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    ListComponent,
    TodoTreePageComponent,
    TodoListPageComponent,
    AdminPageComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
