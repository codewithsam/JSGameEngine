import Display = require('./Display');
import Assets = require('./Assets');
import IState = require("./IState");
import GameState = require("./GameState");
import StateManager = require("./StateManager");
import KeyboardManager = require("./KeyboardManager");
import MapLoader = require("./MapLoader");
class Game{
    public width;
    public height;
    public running = false;
    public g;
    private keyboardManager;
    //states
    private gameState:IState;
    assets;
    display;

    constructor(width:number, height:number,display){
        this.width = width;
        this.height = height;
        this.keyboardManager = new KeyboardManager();
        this.display = display;
    }
    init(){
        this.g = Display.getGraphics(2);
        // this.assets = new Assets(`${__dirname}/../../../res/textures/PlatformPack/Tile-SpriteSheet/tiles.json`);
        this.gameState = new GameState(this);
        StateManager.setState(this.gameState);
        let ml = new MapLoader();
    }
    tick(_td){
        this.keyboardManager.tick();
        if(StateManager.getState() != undefined){
            StateManager.getState().tick(_td);
        }
    }
    render(){
        this.g.clearRect(0,0,this.width,this.height);
        if(StateManager.getState() != undefined){
            StateManager.getState().render(this.g);
        }
        this.display.tilemap.layers.forEach(function (layer,index) {
            MapLoader.render(layer.data,Display.getGraphics(index),layer.width,layer.height);

        }.bind(this));
    }
    
    start(){
        if(this.running) return;
        this.init();
        this.running=true;
        this.run();
    }
    run(){
        let fps = 60;
        let timePerTick = 1000/fps;
        let delta = 0;
        let now;
        let lastTime = Date.now();
        let timer = 0;
        let ticks = 0;
        function loop(){
            if(this.running){
                now = Date.now();
                delta = now-lastTime;
                timer+=delta;
                lastTime = now;
            }
            if(timer>timePerTick){
                let dt = timer/1000;
                this.tick(dt);
                this.render();
                timer = 0;
            }
            window.requestAnimationFrame(loop.bind(this));
        }
        loop.call(this);
    }
    getKeyboardManager():KeyboardManager{
        return this.keyboardManager;
    }
}
export = Game;