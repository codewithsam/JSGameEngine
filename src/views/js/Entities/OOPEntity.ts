
abstract class OOPEntity{
    private _x:number;
    private _y:number;
    private _width:number;
    private _height:number;
    constructor(x:number,y:number,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    public abstract tick():void;
    public abstract render(g):void;

    get x():number {
        return this._x;
    }

    set x(value:number) {
        this._x = value;
    }

    get y():number {
        return this._y;
    }

    set y(value:number) {
        this._y = value;
    }

    get width():number {
        return this._width;
    }

    set width(value:number) {
        this._width = value;
    }

    get height():number {
        return this._height;
    }

    set height(value:number) {
        this._height = value;
    }
}
export = OOPEntity;