import ImageLoader = require("../ImageLoader");
import Tileset = require("./Tileset");
import SpriteSheet = require("../SpriteSheet");
import Tilemap = require("./Tilemap");
class Tile{
    canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    imageURL:string;
    image:HTMLImageElement;
    tileid:number;
    offsetx:number;
    offsety:number;
    property = {};
    public static tileRenedered = 0;
    constructor(src:string,tileid:number,x:number,y:number,w:number,h:number){
        let self = this;
        this.tileid = tileid;
        this.imageURL = "./../../res/Dustbin/map/"+src;
        ImageLoader.loadImage(self.imageURL,function(img) {
            self.image = img;
            self.canvas = SpriteSheet.crop(img,x,y,w,h);
            self.ctx = self.canvas.getContext('2d');
            Tile.tileRenedered++;
            console.log("loading");
        });
    }
}



export = Tile;