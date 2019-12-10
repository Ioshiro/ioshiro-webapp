import { Component, OnInit } from '@angular/core';
import { AlgorithmViewComponent } from '../algorithm-view/algorithm-view.component';

@Component({
  selector: 'projects-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css']
})
export class InsertionSortComponent implements OnInit {
  activeArray : Array<number>;

  constructor() { }

  ngOnInit() {
  }

  insertionSort(n: number){
    var start = new Date().getTime();
    //console.log("[insertionSort]Received array: "+ this.activeArray.toString());
      for(let i = 1; i < n; i++){
        let tmp = this.activeArray[i];
        let j = i;
        while(j > 0 && this.activeArray[j-1] > tmp){
          this.activeArray[j] = this.activeArray[j-1];
          j = j-1;
        }
        this.activeArray[j] = tmp;
        this.activeArray.forEach((v:number, i:number) => {
          AlgorithmViewComponent.setOrderByValue(i,v);
        });
      }
    //console.log("[insertionSort]Sorted array: "+ this.activeArray.toString());
    var elapsed = new Date().getTime() - start;
    console.log("[insertionSort]Time elapsed: "+elapsed+"ms");
   }


  createArray(len: number){
    this.activeArray = AlgorithmViewComponent.createArray(len);
  }

}
