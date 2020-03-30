import { Component, OnInit } from '@angular/core';
import { AlgorithmViewComponent } from '../../../../ui/projects/algorithm-view/algorithm-view.component';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-counting-sort',
  templateUrl: './counting-sort.component.html',
  styleUrls: ['./counting-sort.component.css']
})
export class CountingSortComponent implements OnInit {
  activeArray : Array<number>;
  workArray : Array<number>;
  len : number;
  algorithmName = "Counting Sort";
 
  constructor(public ui: UiService) { }

  ngOnInit() {
    this.ui.algorithmName.next(this.algorithmName);
  }

  countingSort(n: number){
    var start = new Date().getTime();
    console.log("[countingSort]Received array: "+ this.activeArray.toString());
    let i:number, j:number, k:number;
    this.workArray = Array.from({length: n * 3}, () => 0);
    //console.log("[countingSort] created array of len: " + this.workArray.length + "and values: " +this.workArray);
    for(j = 0; j < n; j++){
      this.workArray[this.activeArray[j]] = this.workArray[this.activeArray[j]] + 1
    }
    j = 0;
    for( i = 0; i < this.workArray.length; i++){
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
