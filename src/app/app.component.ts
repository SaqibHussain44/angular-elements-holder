import { Component } from '@angular/core';
import '../assets/app-email-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email1 = '';
  email2 = '';
  constructor() { }

  show() {
    console.log('this', this.email1, this.email2);
  }

}
