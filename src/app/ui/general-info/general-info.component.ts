import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CvComponent } from '../../pages/cv/cv.component';

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
  constructor(public cv: CvComponent) { 

  }

  toggle(){
    this.showGeneral= !this.showGeneral;
  }
  ngOnInit() {
    this.showGeneral = this.cv.showGeneral;
  }

  ngOnDestroy(): void {
    this.showGeneral = false;
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
