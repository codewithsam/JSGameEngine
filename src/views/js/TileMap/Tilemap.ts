let fs = require('fs');
import Layer = require('./Layer');
import Tileset = require('./Tileset');
enum Orientation {
    ORTHOGONAL,
    ISOMETRIC,
    STAGGERED,
    HEXAGONAL
}
enum RenderOrder{
    RIGHT_DOWN,
    RIGHT_UP,
    LEFT_DOWN,
    LEFT_UP
}
class Tilemap{

    version:number;
    orientation:Orientation;
    renderorder:RenderOrder;
    xTileCount:number;
    yTileCound:number;
    tilewidth:number = 0;
    tileheight:number = 0;
    nextObjectID:number;
    public layers:Layer[] = [];
    tilesets:Tileset[] = [];
    public static totalTileCount = 0;

    constructor(filepath?:string){
        if(!filepath) return;
        let self = this;
    if(filepath !== undefined || filepath !== ""){
        this.readFile(filepath);
    }
}
    readFile(filepath){
        let mapData = JSON.parse(fs.readFileSync(filepath,"utf8"));
        console.log(mapData);

        this.version        = mapData.version || 1;

        switch (mapData.orientation){
            case "orthogonal":
                this.orientation = Orientation.ORTHOGONAL;
                break;
            case "isometric":
                this.orientation = Orientation.ISOMETRIC;
                break;
            case "staggered":
                this.orientation = Orientation.STAGGERED;
                break;
            case "hexagonal":
                this.orientation = Orientation.HEXAGONAL;
                break;
            default:
                this.orientation = Orientation.ORTHOGONAL;
        }

        switch (mapData.renderorder){
            case "right-down":
                this.renderorder = RenderOrder.RIGHT_DOWN;
                break;
            case "right-up":
                this.renderorder = RenderOrder.RIGHT_UP;
                break;
            case "left-down":
                this.renderorder = RenderOrder.LEFT_DOWN;
                break;
            case "left-up":
                this.renderorder = RenderOrder.LEFT_UP;
                break;
            default:
                this.renderorder = RenderOrder.RIGHT_DOWN;
                break;
        }

        this.nextObjectID   = mapData.nextobjectid || 1;
        this.xTileCount     = mapData.width || 50;
        this.yTileCound     = mapData.height || 50;
        this.tileheight     = mapData.tileheight || 32;
        this.tilewidth      = mapData.tilewidth || 32;

        for(let i=0;i<mapData.layers.length;i++){
                this.layers[i] = new Layer(mapData.layers[i],this);
        }
        for(let i=0;i<mapData.tilesets.length;i++){
           this.tilesets[i] = new Tileset(mapData.tilesets[i]);
            Tilemap.totalTileCount += this.tilesets[i].tilecount;
        }
    }

}
export = Tilemap;