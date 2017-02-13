"use strict";
var ipcRenderer = require('electron').ipcRenderer;
var Tilemap = require("./TileMap/Tilemap");
var Display = (function () {
    function Display(width, height, src) {
        this.canvas = [];
        this.width = width;
        this.height = height;
        this.createDisplay(src);
    }
    Display.prototype.createDisplay = function (src) {
        this.tilemap = new Tilemap(src);
        this.tilemap.layers.forEach(function (layer, index) {
            console.log(layer.data);
            $(".wrapper").append("<canvas id='" + layer.name + "' width='" + this.width + "' height='" + this.height + "'></canvas>");
            this.canvas[index] = $('#' + layer.name).get(0);
            Display.graphics[index] = this.canvas[index].getContext('2d');
        }.bind(this));
    };
    Display.getGraphics = function (id) {
        return Display.graphics[id];
    };
    Display.graphics = [];
    return Display;
}());
module.exports = Display;
//# sourceMappingURL=Display.js.map