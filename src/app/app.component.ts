import { Component, OnInit, OnDestroy } from '@angular/core';
import { UiService } from './services/ui/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title : string;
  showMenu = false;
  darkModeActive : boolean;
  sub1: Subscription;
  sub2: Subscription;
  
  constructor(public ui: UiService){

  }

  ngOnInit() {
    this.sub1 = this.ui.title.subscribe((value) => {
      this.title = value;
    });
    this.sub2 = this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
  }

  toggleMenu(){
    this.showMenu = !this.showMenu; 
  }

  modeToggleSwitch(){
    this.ui.darkModeState.next(!this.darkModeActive);
  }

  setTitle(newTitle){
    this.title = newTitle;
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
