import { Component } from '@angular/core';  // using

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  constructor(){
    this.title = "Now we are in constrcutor";
  }

}
