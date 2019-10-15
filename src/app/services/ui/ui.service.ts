import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  title: BehaviorSubject<string>;
  darkModeState: BehaviorSubject<boolean>;

  constructor() { 
    this.title = new BehaviorSubject<string>("blank");
    this.darkModeState = new BehaviorSubject<boolean>(false);
  }

}
