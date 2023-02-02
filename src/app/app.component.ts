import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public forList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public visible = true;
}
