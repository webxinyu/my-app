import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countTime = new Date().getHours();
  get nowTime() {
    return `${this.countTime}`;
  }
  constructor() { }

  ngOnInit() {
  }

}
