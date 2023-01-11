import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { ListComponent } from './components/list/list.component';
import { TodoTreePageComponent } from './components/pages/todo-tree-page/todo-tree-page.component';
import { TodoListPageComponent } from './components/pages/todo-list-page/todo-list-page.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'tree', component: TodoTreePageComponent },
  { path: 'list', component: TodoListPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    ListComponent,
    TodoTreePageComponent,
    TodoListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
