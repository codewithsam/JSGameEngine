"use strict";
var fs = require('fs');
var Layer = require('./Layer');
var Tileset = require('./Tileset');
var Orientation;
(function (Orientation) {
    Orientation[Orientation["ORTHOGONAL"] = 0] = "ORTHOGONAL";
    Orientation[Orientation["ISOMETRIC"] = 1] = "ISOMETRIC";
    Orientation[Orientation["STAGGERED"] = 2] = "STAGGERED";
    Orientation[Orientation["HEXAGONAL"] = 3] = "HEXAGONAL";
})(Orientation || (Orientation = {}));
var RenderOrder;
(function (RenderOrder) {
    RenderOrder[RenderOrder["RIGHT_DOWN"] = 0] = "RIGHT_DOWN";
    RenderOrder[RenderOrder["RIGHT_UP"] = 1] = "RIGHT_UP";
    RenderOrder[RenderOrder["LEFT_DOWN"] = 2] = "LEFT_DOWN";
    RenderOrder[RenderOrder["LEFT_UP"] = 3] = "LEFT_UP";
})(RenderOrder || (RenderOrder = {}));
var Tilemap = (function () {
    function Tilemap(filepath) {
        this.tilewidth = 0;
        this.tileheight = 0;
        this.layers = [];
        this.tilesets = [];
        if (!filepath)
            return;
        var self = this;
        if (filepath !== undefined || filepath !== "") {
            this.readFile(filepath);
        }
    }
    Tilemap.prototype.readFile = function (filepath) {
        var mapData = JSON.parse(fs.readFileSync(filepath, "utf8"));
        console.log(mapData);
        this.version = mapData.version || 1;
        switch (mapData.orientation) {
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
        switch (mapData.renderorder) {
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
        this.nextObjectID = mapData.nextobjectid || 1;
        this.xTileCount = mapData.width || 50;
        this.yTileCound = mapData.height || 50;
        this.tileheight = mapData.tileheight || 32;
        this.tilewidth = mapData.tilewidth || 32;
        for (var i = 0; i < mapData.layers.length; i++) {
            this.layers[i] = new Layer(mapData.layers[i], this);
        }
        for (var i = 0; i < mapData.tilesets.length; i++) {
            this.tilesets[i] = new Tileset(mapData.tilesets[i]);
            Tilemap.totalTileCount += this.tilesets[i].tilecount;
        }
    };
    Tilemap.totalTileCount = 0;
    return Tilemap;
}());
module.exports = Tilemap;
//# sourceMappingURL=Tilemap.js.map