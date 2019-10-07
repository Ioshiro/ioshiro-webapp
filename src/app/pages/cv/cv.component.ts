import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui/ui.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  title = "About Me";
  showGeneral = false;
  showSchool = false;
  showGames = false;

  toggleGeneral(){
    if(this.showGeneral)
      this.showGeneral = false;
    else{
      this.showGeneral = true;
      this.showGames = false;
      this.showSchool = false;
    }
  }
  toggleSchool(){
    if(this.showSchool)
      this.showSchool = false;
    else{
      this.showSchool = true;
      this.showGames = false;
      this.showGeneral = false;
    }
  }
  toggleGames(){
    if(this.showGames)
      this.showGames = false;
    else{
      this.showGames = true;
      this.showGeneral = false;
      this.showSchool = false;
    }
  }
  constructor(public ui: UiService) {
    
   }

  ngOnInit() {
    this.ui.setTitle(this.title);
  }

  moveOminoTo(newX, newY){
    document.getElementById("omino").setAttribute("transform", "translateX(50%)");
  }

}
