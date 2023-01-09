import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  counter:number = 0;
  isRed:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
    this.isRed = this.counter >= 10;
  }

}
