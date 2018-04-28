import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countTime = new Date().getHours();
  get nowTime() {
    return `${this.countTime}`;
  }
}
