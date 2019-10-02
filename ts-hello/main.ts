import { RSA_X931_PADDING } from "constants";

class Point{
    constructor(private _x?:number,private _y?:number){
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    getDistance(another: Point){
        //...
    } 
    get x(){
        return this.x;
    }
    get y(value: number){
        this._y = value;
    }
}

let point = new Point(2, 3);
point.draw();