import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  //ou bien :
  /*
  template: `<br> <span> Bonjour </span>`;
  */
  // de même pour styleUrls
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'app';
}
