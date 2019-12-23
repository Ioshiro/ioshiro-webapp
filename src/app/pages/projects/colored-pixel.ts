export class ColoredPixel {
    id: number;
    val: number;
    color: string;
    size: string;
    constructor(id: number, val: number, siz: number, col: string){
      this.id = id;
      this.val = val;
      this.color = col;
      //console.log("created color:" +this.color);
      this.size = siz.toString() + 'rem';
    }

    stringToColour(str: string) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
          var value = (hash >> (i * 8)) & 0xFF;
          colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
      }


}
