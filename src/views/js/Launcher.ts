import Tilemap = require("./TileMap/Tilemap");
const {ipcRenderer} = require('electron');
import Game = require('./Game');
import TileMap = require('./TileMap/Tilemap');
import Tileset = require("./TileMap/Tileset");
import Tile = require("./TileMap/Tile");
import Display = require("./Display");

class Launcher{
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    constructor(display){
        $('body').width(this.windowWidth);
        $('body').height(this.windowHeight);
        let game = new Game(this.windowWidth,this.windowHeight,display);
        game.start();
    }
}



(function($){
    $(function(){
        let display = new Display($(window).width(), $(window).height(), "res/Dustbin/map/level1.json");
        let inter =  setInterval(function () {
            if(Tilemap.totalTileCount === Tile.tileRenedered){
                clearInterval(inter);
                let Launch = new Launcher(display);
            }
        },1000);







    });
}(jQuery));