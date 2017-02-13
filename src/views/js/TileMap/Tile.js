"use strict";
var ImageLoader = require("../ImageLoader");
var SpriteSheet = require("../SpriteSheet");
var Tile = (function () {
    function Tile(src, tileid, x, y, w, h) {
        this.property = {};
        var self = this;
        this.tileid = tileid;
        this.imageURL = "./../../res/Dustbin/map/" + src;
        ImageLoader.loadImage(self.imageURL, function (img) {
            self.image = img;
            self.canvas = SpriteSheet.crop(img, x, y, w, h);
            self.ctx = self.canvas.getContext('2d');
            Tile.tileRenedered++;
            console.log("loading");
        });
    }
    Tile.tileRenedered = 0;
    return Tile;
}());
module.exports = Tile;
//# sourceMappingURL=Tile.js.map