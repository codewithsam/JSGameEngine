import Tileset = require("./TileMap/Tileset");
const {ipcRenderer} = require('electron');
import Tilemap = require("./TileMap/Tilemap");

class Display{
    private width:number;
    private  height:number;
    private canvas = [];
    public static graphics = [];
    tilemap:Tilemap;
    constructor(width,height,src){
        this.width = width;
        this.height = height;
        this.createDisplay(src);

    }

    createDisplay(src){
        this.tilemap = new Tilemap(src);
        this.tilemap.layers.forEach(function (layer,index) {
            console.log(layer.data);
            $(".wrapper").append(`<canvas id='${layer.name}' width='${this.width}' height='${this.height}'></canvas>`);
            this.canvas[index] = $('#'+layer.name).get(0);
            Display.graphics[index] = this.canvas[index].getContext('2d');
        }.bind(this));
    }
    static getGraphics(id){
        return Display.graphics[id];
    }

}
export = Display;