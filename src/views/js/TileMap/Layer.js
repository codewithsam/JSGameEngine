"use strict";
var Layer = (function () {
    function Layer(layer, tilemapconst) {
        this.name = layer.name;
        this.x = layer.x;
        this.y = layer.y;
        this.width = layer.width;
        this.height = layer.height;
        this.totalwidth = this.width * tilemapconst.tilewidth;
        this.totalheight = this.height * tilemapconst.tileheight;
        this.opacity = layer.opacity;
        this.visible = layer.visible;
        this.offsetx = layer.offsetx;
        this.offsety = layer.offsety;
        this.data = layer.data;
        this.type = layer.type;
    }
    return Layer;
}());
module.exports = Layer;
//# sourceMappingURL=Layer.js.map