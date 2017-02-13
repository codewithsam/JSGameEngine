"use strict";
var Display = require('./Display');
var GameState = require("./GameState");
var StateManager = require("./StateManager");
var KeyboardManager = require("./KeyboardManager");
var MapLoader = require("./MapLoader");
var Game = (function () {
    function Game(width, height, display) {
        this.running = false;
        this.width = width;
        this.height = height;
        this.keyboardManager = new KeyboardManager();
        this.display = display;
    }
    Game.prototype.init = function () {
        this.g = Display.getGraphics(2);
        // this.assets = new Assets(`${__dirname}/../../../res/textures/PlatformPack/Tile-SpriteSheet/tiles.json`);
        this.gameState = new GameState(this);
        StateManager.setState(this.gameState);
        var ml = new MapLoader();
    };
    Game.prototype.tick = function (_td) {
        this.keyboardManager.tick();
        if (StateManager.getState() != undefined) {
            StateManager.getState().tick(_td);
        }
    };
    Game.prototype.render = function () {
        this.g.clearRect(0, 0, this.width, this.height);
        if (StateManager.getState() != undefined) {
            StateManager.getState().render(this.g);
        }
        this.display.tilemap.layers.forEach(function (layer, index) {
            MapLoader.render(layer.data, Display.getGraphics(index), layer.width, layer.height);
        }.bind(this));
    };
    Game.prototype.start = function () {
        if (this.running)
            return;
        this.init();
        this.running = true;
        this.run();
    };
    Game.prototype.run = function () {
        var fps = 60;
        var timePerTick = 1000 / fps;
        var delta = 0;
        var now;
        var lastTime = Date.now();
        var timer = 0;
        var ticks = 0;
        function loop() {
            if (this.running) {
                now = Date.now();
                delta = now - lastTime;
                timer += delta;
                lastTime = now;
            }
            if (timer > timePerTick) {
                var dt = timer / 1000;
                this.tick(dt);
                this.render();
                timer = 0;
            }
            window.requestAnimationFrame(loop.bind(this));
        }
        loop.call(this);
    };
    Game.prototype.getKeyboardManager = function () {
        return this.keyboardManager;
    };
    return Game;
}());
module.exports = Game;
//# sourceMappingURL=Game.js.map