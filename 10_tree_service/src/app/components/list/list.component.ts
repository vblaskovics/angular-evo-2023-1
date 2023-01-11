import { Component, Input, OnInit } from '@angular/core';
import { Tree } from 'src/app/models/tree';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() listItems?: Array<string>;

  constructor() {}

  ngOnInit(): void {}

  
}
