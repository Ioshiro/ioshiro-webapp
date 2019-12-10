import { Component, OnInit } from '@angular/core';
import { AlgorithmViewComponent } from '../algorithm-view/algorithm-view.component';

@Component({
  selector: 'app-counting-sort',
  templateUrl: './counting-sort.component.html',
  styleUrls: ['./counting-sort.component.css']
})
export class CountingSortComponent implements OnInit {
  activeArray : Array<number>;
  workArray : Array<number>;
 
  constructor() { }

  ngOnInit() {
  }

  countingSort(n: number){
    var start = new Date().getTime();
    console.log("[countingSort]Received array: "+ this.activeArray.toString());
    let i, j, k;
    this.workArray = Array.from({length: n}, () => 0);
    for(j = 0; j < n; j++){
      this.workArray[this.activeArray[j]] = this.workArray[this.activeArray[j]] + 1
    }
    j = 0;
    for( i = 0; i < n; i++){
      while(this.workArray[i] > 0){
        this.activeArray[j] = i;
        j = j+1;
        this.workArray[i] = this.workArray[i] - 1;
      }
      this.activeArray.forEach((v:number, i:number) => {
        AlgorithmViewComponent.setOrderByValue(i,v);
      });
    }
    console.log("[countingSort]Sorted array: "+ this.activeArray.toString());
    var elapsed = new Date().getTime() - start;
    console.log("[countingSort]Time elapsed: "+elapsed+"ms");
   }


  createArray(len: number){
    this.activeArray = AlgorithmViewComponent.createArray(len);
  }
}
