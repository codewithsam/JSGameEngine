import Tile = require("./Tile");
import ImageLoader = require("../ImageLoader");
import Tilemap = require("./Tilemap");
class Tileset{

    columns:number;
    firstgid:number;
    margin:number;
    name:string;
    spacing:number;
    tilecount:number;
    tileheight:number;
    tilewidth:number;
    tileproperties = [];
    tilepropertytypes = [];
    static tiles:Tile[] = [];

    constructor(tilesetdata:any){
        this.columns = tilesetdata.columns || 0;
        this.firstgid = tilesetdata.firstgid || 0;
        this.margin = tilesetdata.margin || 0;
        this.name = tilesetdata.name || "";
        this.spacing = tilesetdata.spacing || 0;
        this.tilecount = tilesetdata.tilecount || 0;
        this.tileheight = tilesetdata.tileheight || 0;
        this.tilewidth  = tilesetdata.tilewidth || 0;
        this.tileproperties = tilesetdata.tileproperties || [];
        this.tilepropertytypes = tilesetdata.tilepropertytypes || [];
        if(tilesetdata.tiles !== undefined){
            for(let property in tilesetdata.tiles){
                let pos = parseInt(property)+1;
                Tileset.tiles[pos] = new Tile(tilesetdata.tiles[property]["image"],pos,0,0,this.tilewidth,this.tileheight);
            }
        }
        if(tilesetdata.tiles === undefined){
            let rows = Math.floor(tilesetdata.imageheight/ tilesetdata.tileheight);
            let pos = tilesetdata.firstgid;
            this.tilecount = rows*tilesetdata.columns;
            for(let x=0;x<rows;x++){
                for(let y=0;y<tilesetdata.columns;y++){
                    let px = y* tilesetdata.tilewidth;
                    let py = x* tilesetdata.tileheight;
                    Tileset.tiles[pos] = new Tile(tilesetdata.image,pos,px,py,tilesetdata.tilewidth,tilesetdata.tileheight);
                    pos++;
                }

            }
        }
    }

    static getTile(tileID){
        return Tileset.tiles[tileID];
    }
}

export = Tileset;