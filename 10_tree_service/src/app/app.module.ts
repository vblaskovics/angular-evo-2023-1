import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: 'tree', component: TreeComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
