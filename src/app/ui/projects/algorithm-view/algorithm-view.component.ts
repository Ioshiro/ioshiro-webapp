import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColoredPixel } from '../../../services/projects/colored-pixel/colored-pixel';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui/ui.service';

@Component({
  selector: 'app-algorithm-view',
  templateUrl: './algorithm-view.component.html',
  styleUrls: ['./algorithm-view.component.css']
})
export class AlgorithmViewComponent implements OnInit, OnDestroy {

  static activeArray : Array<number>;
  static activeLength : number;
  static pixelsArray: Array<ColoredPixel>;
  static workArray : Array<number>;
  static gradientArray: Array<string>;
  static len : number;
  sub1 : Subscription;
  algorithmName : string;
  
  constructor(public ui: UiService) {
  }

  ngOnInit() {
    AlgorithmViewComponent.activeArray = [];
    AlgorithmViewComponent.pixelsArray = [];
    AlgorithmViewComponent.workArray = [];
    AlgorithmViewComponent.gradientArray = [];
    this.sub1 = this.ui.algorithmName.subscribe((value) => {
      this.algorithmName = value;
    });
  }

  ngOnDestroy() {
    AlgorithmViewComponent.flushArray();
    this.sub1.unsubscribe();
  } 

  static flushArray(){
    if(this.pixelsArray != undefined){
      this.pixelsArray.forEach((v:ColoredPixel, i:number) =>{
        document.getElementById(v.id.toString()).remove();
      });
      console.log("[flushArray] array emptied");
    }
    else{
      console.log("[flushArray] array undefined");
    }
  }

  static createArray(len: number){
    
      this.flushArray();

    this.activeArray = Array.from({length: len}, () => Math.floor(Math.random() * (len*3)));
    this.activeLength = len;
    console.log("[createArray]created array of len "+len+" and values:" +this.activeArray);
    this.pixelsArray = new Array();
    this.gradientArray = this.gradient("#96858f","#6d7993",this.activeLength);
    this.activeArray.forEach((v: number, i: number) =>{
      this.addColoredPixel(v,i, this.gradientArray[Math.floor(v/3)]);
      this.appendColoredPixel(this.pixelsArray[i]);});
    return this.activeArray;
  }

  static addColoredPixel(element: number, index: number, col: string){
    //console.log("[addColoredPixel] Passin elem: "+element+" at index: "+index);
    let newPixel = new ColoredPixel(index, element, 5, col);
    let newLen = this.pixelsArray.push(newPixel);
  }

  static appendColoredPixel(newPixel: ColoredPixel){
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


  // @TODO
  // better implementation of dynamic graphic/visual sorting
  // with less cycles
  static setOrderByValue(i: number, v: number){
    for(let j in this.pixelsArray){
      let element = document.getElementById(j.toString());
      if(element.innerHTML == v.toString()){
        element.style.order = i.toString();
      }
    }
  }
  static getValues(arr: Array<ColoredPixel>){
    let text: string;
    for(let x in arr){
      text += arr[x].val;
      text += " ";
    }
    return text;
  }


  static gradient(startColor:string, endColor:string, steps:number) {
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
