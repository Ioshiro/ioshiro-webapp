import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CvComponent } from '../../../pages/cv/cv.component';
import { UiService } from '../../../services/ui/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-general-info',
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
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
  showGeneral = false;
  darkModeActive : boolean;
  circleActive : number;
  isCircleActive : boolean[] = [false, false, false, false];
  sub1 : Subscription;
  sub2 : Subscription;
  constructor(public cv: CvComponent, public ui: UiService) { 

  }

  toggle(){
    this.showGeneral= !this.showGeneral;
  }
  ngOnInit() {
    //this.cv.showGeneral = !this.cv.showGeneral;
    this.sub2 = this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    }); 
    this.sub1 = this.ui.circleActiveNumber.subscribe((value) => {
      switch(value){
        case 0:
          this.isCircleActive[0] = false;
          this.isCircleActive[1] = false;
          this.isCircleActive[2] = false;
          this.isCircleActive[3] = false;
          console.log("i saw "+value);
          break;
        case 1:
          this.isCircleActive[0] = true;
          console.log("i saw "+value);
          break;
        case 2:
          this.isCircleActive[1] = true;
          console.log("i saw "+value);
          break;
        case 3:
          this.isCircleActive[2] = true;
          console.log("i saw "+value);
          break;
        case 4:
          this.isCircleActive[3] = true;
          console.log("i saw "+value);
          break;
        default:
          console.log("something went wrong.");
          break;
      }

    });
  }

  ngOnDestroy(): void {
    this.showGeneral = false;
    this.sub1.unsubscribe();
  }

  moveOminoTo(num){
    switch (num) {
      case 0:
       this.cv.moveSection("omino",0,0);
       break;
      case 1:
        this.cv.moveSection("omino",-1000,500);
        break;
      case 2:
        this.cv.moveSection("omino",-500,900);
        break;
      case 3:
        this.cv.moveSection("omino",-800,-400);
        break;
      case 4:
        this.cv.moveSection("omino",-1200,-200);
        break;
      default:
        this.cv.moveSection("omino",0,0);
        break;
    }
  }

}
