import { Component } from '@angular/core';
import { UiService } from './services/ui/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  showMenu = false;
  darkModeActive = false;

  constructor(public ui: UiService){

  }
  sub1;
  ngOnInit() {
    this.sub1 = this.ui.title.subscribe((value) => {
      this.title = value;
    });
  }

  toggleMenu(){
    this.showMenu = !this.showMenu; 
  }

  modeToggleSwitch(){
    this.darkModeActive = !this.darkModeActive;
  }

  setTitle(newTitle){
    this.title = newTitle;
  }
}
