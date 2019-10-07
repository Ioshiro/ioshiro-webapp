import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  title: BehaviorSubject<string>;
  constructor() { 
    this.title = new BehaviorSubject<string>("blank");
  }

  getTitle(){
    return this.title;
  }

  setTitle(newTitle){
    this.title.next(newTitle);
    console.log(this.title.getValue());
    console.log("passato: "+ newTitle);
  }
}
