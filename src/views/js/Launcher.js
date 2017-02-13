"use strict";
var Tilemap = require("./TileMap/Tilemap");
var ipcRenderer = require('electron').ipcRenderer;
var Game = require('./Game');
var Tile = require("./TileMap/Tile");
var Display = require("./Display");
var Launcher = (function () {
    function Launcher(display) {
        this.windowWidth = $(window).width();
        this.windowHeight = $(window).height();
        $('body').width(this.windowWidth);
        $('body').height(this.windowHeight);
        var game = new Game(this.windowWidth, this.windowHeight, display);
        game.start();
    }
    return Launcher;
}());
(function ($) {
    $(function () {
        var display = new Display($(window).width(), $(window).height(), "res/Dustbin/map/level1.json");
        var inter = setInterval(function () {
            if (Tilemap.totalTileCount === Tile.tileRenedered) {
                clearInterval(inter);
                var Launch = new Launcher(display);
            }
        }, 1000);
    });
}(jQuery));
//# sourceMappingURL=Launcher.js.map