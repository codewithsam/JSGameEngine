"use strict";
var Tile = require("./Tile");
var Tileset = (function () {
    function Tileset(tilesetdata) {
        this.tileproperties = [];
        this.tilepropertytypes = [];
        this.columns = tilesetdata.columns || 0;
        this.firstgid = tilesetdata.firstgid || 0;
        this.margin = tilesetdata.margin || 0;
        this.name = tilesetdata.name || "";
        this.spacing = tilesetdata.spacing || 0;
        this.tilecount = tilesetdata.tilecount || 0;
        this.tileheight = tilesetdata.tileheight || 0;
        this.tilewidth = tilesetdata.tilewidth || 0;
        this.tileproperties = tilesetdata.tileproperties || [];
        this.tilepropertytypes = tilesetdata.tilepropertytypes || [];
        if (tilesetdata.tiles !== undefined) {
            for (var property in tilesetdata.tiles) {
                var pos = parseInt(property) + 1;
                Tileset.tiles[pos] = new Tile(tilesetdata.tiles[property]["image"], pos, 0, 0, this.tilewidth, this.tileheight);
            }
        }
        if (tilesetdata.tiles === undefined) {
            var rows = Math.floor(tilesetdata.imageheight / tilesetdata.tileheight);
            var pos = tilesetdata.firstgid;
            this.tilecount = rows * tilesetdata.columns;
            for (var x = 0; x < rows; x++) {
                for (var y = 0; y < tilesetdata.columns; y++) {
                    var px = y * tilesetdata.tilewidth;
                    var py = x * tilesetdata.tileheight;
                    Tileset.tiles[pos] = new Tile(tilesetdata.image, pos, px, py, tilesetdata.tilewidth, tilesetdata.tileheight);
                    pos++;
                }
            }
        }
    }
    Tileset.getTile = function (tileID) {
        return Tileset.tiles[tileID];
    };
    Tileset.tiles = [];
    return Tileset;
}());
module.exports = Tileset;
//# sourceMappingURL=Tileset.js.map