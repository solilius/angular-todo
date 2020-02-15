import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-todo';
  constructor(){
      console.log(this.title);
      this.changeTitle('Hello Angular');
  }

  changeTitle(name:string):void {
      this.title = name;
  }
}
