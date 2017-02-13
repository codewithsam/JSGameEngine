import Tileset = require("./TileMap/Tileset");
import Display = require("./Display");
class MapLoader{
    constructor(){

    }

    static render(mapdata,g,rows,cols){
        for(let i=0;i<mapdata.length;i++){
            if(mapdata[i] === 0) continue;
            let x = (i  % rows) * 70;
            let y = Math.floor(i / rows) * 70;
            g.drawImage(Tileset.getTile(mapdata[i]).canvas,x,y);
        }
    }
}

export = MapLoader;