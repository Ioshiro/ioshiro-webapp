import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui/ui.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cv',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('300ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('300ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  title = "About Me";
  darkModeActive : boolean;
  showGeneral = false;
  showSchool = false;
  showGames = false;
  circle1Active = false;
  circle2Active = false;
  circle3Active = false;
  circle4Active = false;
  sub1: Subscription;
  sub2: Subscription;

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
    this.ui.title.next(this.title);
    this.sub1 = this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
    this.sub2 = this.ui.circleActiveNumber.subscribe((value) => {
      switch(value){
        case 0:
          this.circle1Active = false;
          this.circle2Active = false;
          this.circle3Active = false;
          this.circle4Active = false;
          console.log("i saw "+value);
          break;
        case 1:
          this.circle1Active = true;
          console.log("i saw "+value);
          break;
        case 2:
          this.circle2Active = true;
          console.log("i saw "+value);
          break;
        case 3:
          this.circle3Active = true;
          console.log("i saw "+value);
          break;
        case 4:
          this.circle4Active = true;
          console.log("i saw "+value);
          break;
        default:
          console.log("something went wrong.");
          break;
      }

    });
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
  }

  moveOminoTo(newX, newY){
    document.getElementById("omino").setAttribute("transform", "translateX(50%)");
  }

  moveSection(idStr, xOffset, yOffset) {
    var domElemnt = document.getElementById(idStr);
        if (domElemnt) {
            var transformAttr = ' translate(' + xOffset + ',' + yOffset + ')';
            domElemnt.setAttribute('transform', transformAttr);
        }
    }

}
