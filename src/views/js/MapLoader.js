"use strict";
var Tileset = require("./TileMap/Tileset");
var MapLoader = (function () {
    function MapLoader() {
    }
    MapLoader.render = function (mapdata, g, rows, cols) {
        for (var i = 0; i < mapdata.length; i++) {
            if (mapdata[i] === 0)
                continue;
            var x = (i % rows) * 70;
            var y = Math.floor(i / rows) * 70;
            g.drawImage(Tileset.getTile(mapdata[i]).canvas, x, y);
        }
    };
    return MapLoader;
}());
module.exports = MapLoader;
//# sourceMappingURL=MapLoader.js.map