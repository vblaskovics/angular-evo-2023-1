import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  counter:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
    console.log("increment", this.counter);
  }

}
