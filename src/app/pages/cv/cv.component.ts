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
  showGeneral : boolean = false;
  showSchool : boolean = false;
  showGames : boolean = false;
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

   ngOnInit(){
    this.ui.title.next(this.title);
    this.sub1 = this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
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
