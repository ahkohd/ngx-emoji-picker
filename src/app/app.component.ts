import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-emoji-mart';
  toggled: boolean;
  message: String = '';
    constructor()
    {
      this.toggled = false;
    }
  handleSelection(event) {
    
    this.message = this.message + '' + event.char;
}
}
