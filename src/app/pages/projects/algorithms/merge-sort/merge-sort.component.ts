import { Component, OnInit, OnDestroy} from '@angular/core';
import { AlgorithmViewComponent } from '../../../../ui/projects/algorithm-view/algorithm-view.component';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'projects-merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.css']
})

export class MergeSortComponent implements OnInit, OnDestroy {
  activeArray : Array<number>;
  len : number;
  algorithmName = "Merge Sort";

  constructor(public ui: UiService) { }

  ngOnInit() {
    this.ui.algorithmName.next(this.algorithmName);
  }

  ngOnDestroy() {
  }
  
  mergeSort(n: number){
   var start = new Date().getTime();
    //console.log("[mergeSort]Received array: "+ this.activeArray.toString());
    this.topDownSplitMerge(this.activeArray, 0, n-1);
    //console.log("[mergeSort]Sorted array: "+ this.activeArray.toString());
    var elapsed = new Date().getTime() - start;
    console.log("[mergeSort]Time elapsed: "+elapsed+"ms");
  }

 topDownSplitMerge(A: Array<number>, start: number, end: number){

  if(start < end){
      var middle = Math.floor((end+start)/2);
      //console.log("[topDownSplitMerge]Middle is: " + middle);
      this.topDownSplitMerge(A, start, middle);
      this.topDownSplitMerge(A, middle + 1, end);
      this.topDownMerge(A, start, middle, end);
    }
  }

  topDownMerge(A: Array<number>, start: number, middle: number, end: number){
    var i = start;
    var j = middle+1;
    var n1 = middle - start + 1;
    var n2 = end - middle;
    var L = [];
    for (i = 0; i < n1; i++){ 
        L.push(A[start + i]);
        //console.log("[topDownMerge] Adding element to L[]");
    }
    //console.log("[topDownMerge] len of L[]:"+L.length);
    i = 0 
    var R = [];
    for (j = 0; j < n2; j++){
        R.push(A[middle + 1+ j]);

        //console.log("[topDownMerge] Adding element to R[]"); 
    }
    j = 0;
    var k = start;
    //console.log("[topDownMerge] Received A[]="+A+"; done L[]="+L+"; R[]="+R);
    while(i< n1 && j < n2){
      if(L[i] <= R[j]){
        A[k] = L[i];
        i++;

      }
      else{
        A[k] = R[j];
        j++;
      }
      k++;
    }
    while(i < n1){
      A[k] = L[i];
      i++; 
      k++; 
    }
    while (j < n2){ 
      A[k] = R[j]; 
      j++; 
      k++; 
    } 
   
    A.forEach((v: number, i:number) => {
      AlgorithmViewComponent.setOrderByValue(i, v);
    });
    //console.log("[topDownMerge] temporary activeArray: ["+A.toString()+"]");   
  }
  createArray(len: number){
    this.activeArray = AlgorithmViewComponent.createArray(len);
  }

}
