import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  title: BehaviorSubject<string>;
  algorithmName: BehaviorSubject<string>;
  darkModeState: BehaviorSubject<boolean>;
  circleActiveNumber: BehaviorSubject<number>;
  dynamicArray: BehaviorSubject<Array<number>>;

  constructor() { 
    this.title = new BehaviorSubject<string>("blank");
    this.algorithmName = new BehaviorSubject<string>("blank");
    this.darkModeState = new BehaviorSubject<boolean>(false);
    this.circleActiveNumber = new BehaviorSubject<number>(0);
    this.dynamicArray = new BehaviorSubject<Array<number>>([]);
  }


  sleep(milliseconds: number) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
}
