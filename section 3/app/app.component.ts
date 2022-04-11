import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  age:number = 28;
  isDisabled: boolean = true;
  isVisible: boolean = false;


  constructor() {
    setTimeout( () => {
      this.isDisabled = false;
    } , 5000);
  }

  getName() {
    return this.name = 'ahmed';
  }

  whenClicked() {
    this.isVisible = !this.isVisible;
  }

  onTyping(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
