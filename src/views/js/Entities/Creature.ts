import Entity = require("./OOPEntity");
import OOPEntity = require("./OOPEntity");

abstract class Creature extends OOPEntity{
    public static DEFAULT_HEALTH = 100;
    public static DEFAULT_SPEED = 3;
    public static DEFAULT_CREATURE_WIDTH = 64;
    public static DEFAULT_CREATURE_HEIGHT = 64;
    private _health:number;
    private _speed:number;
    protected _xMove:number;
    protected _yMove:number;
    constructor(x:number,y:number,width:number,height:number){
        super(x,y,width,height);
        this.health = Creature.DEFAULT_HEALTH;
        this.speed = Creature.DEFAULT_SPEED;
        this.xMove = 0;
        this.yMove = 0;
    }
    move(){
        this.x += this.xMove;
        this.y += this.yMove;
    }
    get health():number {
        return this._health;
    }

    set health(value:number) {
        this._health = value;
    }

    get speed():number {
        return this._speed;
    }

    set speed(value:number) {
        this._speed = value;
    }
    get xMove():number {
        return this._xMove;
    }

    set xMove(value:number) {
        this._xMove = value;
    }

    get yMove():number {
        return this._yMove;
    }

    set yMove(value:number) {
        this._yMove = value;
    }
}
export = Creature;