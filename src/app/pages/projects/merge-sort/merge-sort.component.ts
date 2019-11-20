import { Component, OnInit} from '@angular/core';
import { ColoredPixel } from '../colored-pixel';

@Component({
  selector: 'projects-merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.css']
})

export class MergeSortComponent implements OnInit {
  activeArray : Array<number>;
  activeLength : number;
  pixelsArray: Array<ColoredPixel>;
  workArray : Array<number>;
  gradientArray: Array<string>;
  len : number;
  constructor() { }

  ngOnInit() {
  }
  
  createArray(len: number){
    if(this.pixelsArray != undefined){
      this.pixelsArray.forEach((v:ColoredPixel, i:number) =>{
        document.getElementById(v.id.toString()).remove();
      });
    }
    this.activeArray = Array.from({length: len}, () => Math.floor(Math.random() * (len*3)));
    this.activeLength = len;
    console.log("[createArray]created array of len "+len+" and values:" +this.activeArray);
    this.pixelsArray = new Array();
    this.gradientArray = this.gradient("#96858f","#6d7993",this.activeLength);
    this.activeArray.forEach((v: number, i: number) =>{
      this.addColoredPixel(v,i, this.gradientArray[Math.floor(v/3)]);
      this.appendColoredPixel(this.pixelsArray[i]);});
  }

  addColoredPixel(element: number, index: number, col: string){
    //console.log("[addColoredPixel] Passin elem: "+element+" at index: "+index);
    let newPixel = new ColoredPixel(index, element, 5, col);
    let newLen = this.pixelsArray.push(newPixel);
  }

  appendColoredPixel(newPixel: ColoredPixel){
    var newElement = document.createElement('div');
    newElement.id = newPixel.id.toString();
    newElement.style.order = newPixel.id.toString();
    newElement.className = 'coloredPixels';
    newElement.style.backgroundColor = newPixel.color;
    newElement.style.height = newPixel.size;
    newElement.style.width = newPixel.size;
    newElement.innerHTML = newPixel.val.toString();
    newElement.style.transition = "order 4000ms linear";
    document.getElementById('dynamicArray').appendChild(newElement);
  }



  mergeSort(n: number){
   var start = new Date().getTime();
    console.log("[mergeSort]Received array: "+ this.activeArray.toString());
    this.topDownSplitMerge(this.activeArray, 0, n-1);
    console.log("[mergeSort]Sorted array: "+ this.activeArray.toString());
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
      this.setOrderByValue(i, v);
    });
    //console.log("[topDownMerge] temporary activeArray: ["+A.toString()+"]");   
  }

  setOrderByValue(i: number, v: number){
    for(let j in this.pixelsArray){
      let element = document.getElementById(j.toString());
      if(element.innerHTML == v.toString()){
        element.style.order = i.toString();
      }
    }
  }

 sleep(milliseconds: number) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  getValues(arr: Array<ColoredPixel>){
    let text: string;
    for(let x in arr){
      text += arr[x].val;
      text += " ";
    }
    return text;
  }


  gradient(startColor:string, endColor:string, steps:number) {
    var start = {
            'Hex'   : startColor,
            'R'     : parseInt(startColor.slice(1,3), 16),
            'G'     : parseInt(startColor.slice(3,5), 16),
            'B'     : parseInt(startColor.slice(5,7), 16)
    }
    var end = {
            'Hex'   : endColor,
            'R'     : parseInt(endColor.slice(1,3), 16),
            'G'     : parseInt(endColor.slice(3,5), 16),
            'B'     : parseInt(endColor.slice(5,7), 16)
    }
    let diffR = end['R'] - start['R'];
    let diffG = end['G'] - start['G'];
    let diffB = end['B'] - start['B'];

    let stepsHex  = new Array();
    let stepsR    = new Array();
    let stepsG    = new Array();
    let stepsB    = new Array();

    for(var i = 0; i <= steps; i++) {
            stepsR[i] = start['R'] + ((diffR / steps) * i);
            stepsG[i] = start['G'] + ((diffG / steps) * i);
            stepsB[i] = start['B'] + ((diffB / steps) * i);
            stepsHex[i] = '#' + Math.round(stepsR[i]).toString(16) + '' + Math.round(stepsG[i]).toString(16) + '' + Math.round(stepsB[i]).toString(16);
    }
    return stepsHex;

}
}
