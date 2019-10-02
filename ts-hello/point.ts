export class Point{
    constructor(private _x?:number,private _y?:number){
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
    
    getX(){
        return this._x;
    }
    setY(value: number){
        this._y = value;
    }
}