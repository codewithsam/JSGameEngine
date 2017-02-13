const fs = require('fs');
import SpriteSheet = require('./SpriteSheet');
import ImageLoader = require('./ImageLoader');

class Assets{
    private sheet;
    public static tileAssets = [];
    public data;
    private img;
    constructor(path){
        var self = this;
        var imagepath = `${__dirname}/../../../res/textures/PlatformPack/Tile-SpriteSheet/tiles.png`;
        this.img = ImageLoader.loadImage(imagepath,function(){
            self.sheet = new SpriteSheet(this);
            self.data = JSON.parse(fs.readFileSync(path));
            self.loadAssets();
        });

    }
    loadAssets() {
        var tileinfo = this.data.frames;
        for(let i=0;i<tileinfo.length;i++){
            var frame = tileinfo[i].frame;
            var canvasELement = this.sheet.crop(frame.x,frame.y,frame.w,frame.h);
            Assets.tileAssets[i] = {
                id: i,
                canvas: canvasELement,
                ctx: canvasELement.getContext("2d")
            };
        }
    }
}
export = Assets;