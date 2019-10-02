import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minimus';
  showMenu = false;
  darkModeActive = false;

  toggleMenu(){
    this.showMenu = !this.showMenu; 
  }

  modeToggleSwitch(){
    this.darkModeActive = !this.darkModeActive;
  }
}
