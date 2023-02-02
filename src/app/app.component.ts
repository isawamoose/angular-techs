import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public fruitList = ['apple', 'pear', 'banana', 'peach', 'kiwi'];
  public studentList = [
    'Paige',
    'Aarohi',
    'Stephen',
    'Hannah',
    'Marcos',
    'Kyle',
  ];
  public visible = true;

  public add() {
    this.numberList.push(this.numberList[this.numberList.length - 1] + 1);
  }

  public remove() {
    if (this.numberList.length > 1) this.numberList.pop();
  }

  public changeVisibility() {
    this.visible = !this.visible;
  }
}
