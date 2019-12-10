import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColoredPixel } from '../colored-pixel';
import { AlgorithmViewComponent } from '../algorithm-view/algorithm-view.component';

@Component({
  selector: 'projects-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.css']
})
export class SelectionSortComponent implements OnInit, OnDestroy {
  activeArray : Array<number>;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
   // AlgorithmViewComponent.flushArray();
  }

  selectionSort(n: number){
    var start = new Date().getTime();
    //console.log("[selectionSort]Received array: "+ this.activeArray.toString());
    for(let i = 0; i < n; i++){
      let j = this.minSelection(this.activeArray, i, n);
      this.swapArrayElements(this.activeArray, i, j);
    }
    //console.log("[selectionSort]Sorted array: "+ this.activeArray.toString());
    var elapsed = new Date().getTime() - start;
    console.log("[selectionSort]Time elapsed: "+elapsed+"ms");
   }

  minSelection(A: Array<number>, i:number, n:number){
    let min = i;
    for(let j = i+1; j < n; j++){
      if(A[j] < A[min])
        min = j;
    }
    return min;
  }

  swapArrayElements(A: Array<number>, indexA:number, indexB:number) {
    let temp = A[indexA];
    A[indexA] = A[indexB];
    A[indexB] = temp;
    AlgorithmViewComponent.setOrderByValue(indexA, A[indexA]);
    AlgorithmViewComponent.setOrderByValue(indexB, A[indexB]);
  };
  createArray(len: number){
    this.activeArray = AlgorithmViewComponent.createArray(len);
  }
}
