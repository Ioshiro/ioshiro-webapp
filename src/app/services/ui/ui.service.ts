import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  title: BehaviorSubject<string>;
  darkModeState: BehaviorSubject<boolean>;
  circleActiveNumber: BehaviorSubject<number>;
  dynamicArray: BehaviorSubject<Array<number>>;

  constructor() { 
    this.title = new BehaviorSubject<string>("blank");
    this.darkModeState = new BehaviorSubject<boolean>(false);
    this.circleActiveNumber = new BehaviorSubject<number>(0);
    this.dynamicArray = new BehaviorSubject<Array<number>>([]);
  }

}
