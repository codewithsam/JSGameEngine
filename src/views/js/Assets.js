"use strict";
var fs = require('fs');
var SpriteSheet = require('./SpriteSheet');
var ImageLoader = require('./ImageLoader');
var Assets = (function () {
    function Assets(path) {
        var self = this;
        var imagepath = __dirname + "/../../../res/textures/PlatformPack/Tile-SpriteSheet/tiles.png";
        this.img = ImageLoader.loadImage(imagepath, function () {
            self.sheet = new SpriteSheet(this);
            self.data = JSON.parse(fs.readFileSync(path));
            self.loadAssets();
        });
    }
    Assets.prototype.loadAssets = function () {
        var tileinfo = this.data.frames;
        for (var i = 0; i < tileinfo.length; i++) {
            var frame = tileinfo[i].frame;
            var canvasELement = this.sheet.crop(frame.x, frame.y, frame.w, frame.h);
            Assets.tileAssets[i] = {
                id: i,
                canvas: canvasELement,
                ctx: canvasELement.getContext("2d")
            };
        }
    };
    Assets.tileAssets = [];
    return Assets;
}());
module.exports = Assets;
//# sourceMappingURL=Assets.js.map