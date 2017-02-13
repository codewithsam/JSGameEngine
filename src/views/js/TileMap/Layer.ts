import Tilemap = require("./Tilemap");
class Layer{
    name:string;
    x:number;
    y:number;
    width:number;
    height:number;
    opacity:number;
    visible:boolean;
    offsetx:number;
    offsety:number;
    totalwidth:number;
    totalheight:number;
    data:Array<number>;
    type:string;
    mp;

    constructor(layer:any,tilemapconst?){
        this.name = layer.name;
        this.x = layer.x;
        this.y = layer.y;
        this.width = layer.width;
        this.height = layer.height;
        this.totalwidth = this.width*tilemapconst.tilewidth;
        this.totalheight = this.height*tilemapconst.tileheight;
        this.opacity = layer.opacity;
        this.visible = layer.visible;
        this.offsetx = layer.offsetx;
        this.offsety = layer.offsety;
        this.data = layer.data;
        this.type = layer.type;
    }
}

export = Layer;